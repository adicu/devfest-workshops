from datetime import datetime

from beanie import Document, PydanticObjectId, Indexed

from typing import Optional


class User(Document):
    id: str
    name: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Settings:
        name = "users"

    async def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        self.updated_at = datetime.now()
        await super().save(*args, **kwargs)


class Movie(Document):
    # Info copied from TMDB
    name: str
    review: str
    year: int

    tmdb_id: str

    poster_path: str
    creator_id: PydanticObjectId

    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Settings:
        name = "movies"

    async def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        self.updated_at = datetime.now()
        await super().save(*args, **kwargs)


class MovieList(Document):
    name: str
    description: str

    creator_id: PydanticObjectId
    movie_ids: list[PydanticObjectId]

    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Settings:
        name = "lists"

    async def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        self.updated_at = datetime.now()
        await super().save(*args, **kwargs)
