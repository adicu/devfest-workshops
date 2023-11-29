"Request handlers related to user management."

import os

from fastapi import APIRouter, Request, HTTPException, status
from svix import Webhook

from flickpicks_api.models.user import User
from flickpicks_api.config import CONFIG


router = APIRouter(prefix="/users", tags=["users"])


@router.post("/create", response_model=User)
async def create_user(user_payload: dict, request: Request):
    """
    Create a new user in the database.
    Do not call this directly -- it responds to a webhook from Clerk.
    """

    svix_id = request.headers.get("svix-id")
    svix_signature = request.headers.get("svix-signature")
    svix_timestamp = request.headers.get("svix-timestamp")
    webhook_secret = CONFIG.clerk_webhook_secret

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

    new_user = User(name=name, id=user_id)
    await new_user.save()

    return new_user


@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str):
    document = await User.get(user_id)

    if not document:
        raise HTTPException(status.HTTP_404, "User not found")

    return document
