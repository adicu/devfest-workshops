from fastapi import FastAPI
import motor.motor_asyncio
from beanie import init_beanie
import modal
from fastapi.middleware.cors import CORSMiddleware

from flickpicks_api.models.user import User
from flickpicks_api.models.movie import Movie
from flickpicks_api.models.list import MovieList
from flickpicks_api.routers import users, movies
from flickpicks_api.config import CONFIG


origins = [
    "https://flickpicks.vercel.app",  # TODO: Change this to the actual domain
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

app.include_router(users.router)
app.include_router(movies.router)


image = modal.Image.debian_slim().pip_install_from_pyproject(
    pyproject_toml="./pyproject.toml"
)
stub = modal.Stub()


@stub.function(image=image, secret=modal.Secret.from_name("flickpicks-secrets"))
@modal.asgi_app()
async def fastapi_app():
    client = motor.motor_asyncio.AsyncIOMotorClient(CONFIG.mongo_uri)
    await init_beanie(
        database=client["FlickPicks"], document_models=[User, Movie, MovieList]  # type: ignore
    )

    return app
