"Request handlers related to movie reviews."

from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from beanie import PydanticObjectId

from flickpicks_api.models.user import User
from flickpicks_api.models.list import MovieList
from flickpicks_api.auth import current_user

router = APIRouter(prefix="/lists", tags=["lists"])


class CreateListRequest(BaseModel):
    name: str
    description: str
    movie_ids: list[PydanticObjectId] = []


class UpdateListRequest(BaseModel):
    list_id: PydanticObjectId
    name: Optional[str]
    description: Optional[str]
    movie_ids: Optional[list[PydanticObjectId]]


@router.post("/create", response_model=MovieList)
async def create_list(request: CreateListRequest, user: User = Depends(current_user)):
    movie_list = MovieList(
        name=request.name,
        description=request.description,
        movie_ids=request.movie_ids,
        creator_id=user.id,
    )

    doc = await movie_list.save()
    return doc


@router.post("/update", response_model=MovieList)
async def update_list(request: UpdateListRequest, user: User = Depends(current_user)):
    if not request.name and not request.description and not request.movie_ids:
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, "Please specify a field to update."
        )

    document = await MovieList.get(request.list_id)

    if not document:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND,
            f"Movie list with id ({request.list_id}) was not found.",
        )

    if user.id != document.creator_id:
        raise HTTPException(
            status.HTTP_403_FORBIDDEN,
            "This user doesn't have permission to edit this list.",
        )

    if request.name:
        document.name = request.name

    if request.description:
        document.description = request.description

    if request.movie_ids:
        document.movie_ids = request.movie_ids

    await document.save()

    return document


@router.get("/{list_id}", response_model=MovieList)
async def get_list(list_id: str):
    document = await MovieList.get(list_id)

    if not document:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND, f"Movie list with id ({list_id}) was not found."
        )

    return document
