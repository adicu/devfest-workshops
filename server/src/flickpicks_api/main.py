from fastapi import FastAPI, Request, HTTPException, status, Depends, Header
import motor.motor_asyncio
from beanie import init_beanie, Document, PydanticObjectId
from typing import Sequence
from contextlib import asynccontextmanager
import modal
import os
from svix import Webhook

from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

from flickpicks_api.model import User, Movie, MovieList
from flickpicks_api.auth import jwt_auth


origins = [
    "https://flickpicks.vercel.app", # TODO: Change this to the actual domain
    "http://localhost",
    "http://localhost:3000",
]


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/users/create", response_model=User)
async def create_user(user_payload: dict, request: Request):
    username = os.environ.get("MONGO_USER")
    password = os.environ.get("MONGO_PASSWORD")

    client = motor.motor_asyncio.AsyncIOMotorClient(
        f"mongodb+srv://{username}:{password}@cluster0.vg5ib.mongodb.net/?retryWrites=true&w=majority"
    )
    await init_beanie(database=client["FlickPicks"], document_models=[User, Movie, MovieList])  # type: ignore

    # Verify the webhook
    svix_id = request.headers.get("svix-id")
    svix_signature = request.headers.get("svix-signature")
    svix_timestamp = request.headers.get("svix-timestamp")
    webhook_secret = os.environ.get("CLERK_WEBHOOK_SECRET")

    if not svix_id or not svix_signature or not svix_timestamp:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing svix headers",
        )

    if not webhook_secret:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing webhook secret",
        )

    webhook = Webhook(webhook_secret)
    payload = await request.body()

    if not webhook.verify(
        payload,
        {
            "svix-id": svix_id,
            "svix-signature": svix_signature,
            "svix-timestamp": svix_timestamp,
        },
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid svix signature",
        )

    user_payload = user_payload["data"]
    name = user_payload["first_name"] + " " + user_payload["last_name"]
    user_id: str = user_payload["id"]

    new_user = User(name=name, clerk_id=user_id)
    # # print(new_user)
    await new_user.save()
    return new_user


image = modal.Image.debian_slim().pip_install_from_pyproject(
    pyproject_toml="./pyproject.toml"
)
stub = modal.Stub()


@stub.function(image=image, secret=modal.Secret.from_name("flickpicks-secrets"))
@modal.asgi_app()
def fastapi_app():
    return app
