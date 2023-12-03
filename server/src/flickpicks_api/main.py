from fastapi import FastAPI
import motor.motor_asyncio
from beanie import init_beanie

# import modal
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager


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


@asynccontextmanager
async def lifespan(app: FastAPI):
    client = motor.motor_asyncio.AsyncIOMotorClient(CONFIG.mongo_uri)
    await init_beanie(
        database=client["FlickPicks"], document_models=[User, Movie, MovieList]  # type: ignore
    )
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(movies.router)


def serve_dev():
    import uvicorn

    uvicorn.run(
        "flickpicks_api.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="debug",
    )


def serve_prod():
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
