"Request handlers related to movie reviews."

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
import httpx

from flickpicks_api.models.movie import Movie
from flickpicks_api.models.user import User
from flickpicks_api.auth import current_user
from flickpicks_api.config import CONFIG

router = APIRouter(prefix="/movies", tags=["movies"])


class MovieRequest(BaseModel):
    tmdb_id: str
    review: str


class TMDBMovie(BaseModel):
    id: int
    poster_path: str
    title: str
    release_date: str


async def fetch_from_tmdb(tmdb_id: str) -> TMDBMovie:
    url = f"https://api.themoviedb.org/3/movie/{tmdb_id}?language=en-US"
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {CONFIG.tmdb_api_key}",
    }

    async with httpx.AsyncClient() as client:
        movie = await client.get(
            url, headers=headers
        )  # Replace with actual TMDB API call
        movie = movie.json()

        return movie


@router.post("/create", response_model=Movie)
async def create_movie(request: MovieRequest, user: User = Depends(current_user)):
    movie = await fetch_from_tmdb(request.tmdb_id)

    document = Movie(
        tmdb_id=request.tmdb_id,
        creator_id=user.id,
        review=request.review,
        release_date=movie.release_date,
        poster_path=movie.poster_path,
        title=movie.title,
    )

    await document.save()
    return document


@router.get("/{movie_id}", response_model=Movie)
async def get_movie(movie_id: str):
    document = await Movie.get(movie_id)

    if not document:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Movie review not found")

    return document
