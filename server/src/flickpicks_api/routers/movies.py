"Request handlers related to movie reviews."

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
import httpx

from flickpicks_api.models.movie import Movie
from flickpicks_api.models.user import User
from flickpicks_api.auth import jwt_auth

router = APIRouter(prefix="/movies", tags=["movies"])


class MovieRequest(BaseModel):
    tmdb_id: str
    review: str


@router.post("/create", response_model=Movie)
async def create_movie(request: MovieRequest, user: User = Depends(jwt_auth)):
    async with httpx.AsyncClient() as client:
        movie = await client.get(
            "tmdbapi.com/id" + request.tmdb_id
        )  # Replace with actual TMDB API call
        movie = movie.json()

        document = Movie(
            tmdb_id=request.tmdb_id,
            creator_id=user.id,
            review=request.review,
            year=movie.year,
            poster_path=movie.poster_path,
            name=movie.name,
        )

        await document.save()
        return document


@router.get("/{movie_id}", response_model=Movie)
async def get_movie(movie_id: str):
    document = await Movie.get(movie_id)

    if not document:
        raise HTTPException(status.HTTP_404, "Movie review not found")

    return document
