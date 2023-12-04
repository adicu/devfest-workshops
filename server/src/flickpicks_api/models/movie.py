from datetime import datetime

from beanie import Document

from typing import Optional


class Movie(Document):
    # Info copied from TMDB
    title: str
    review: str
    release_date: str

    tmdb_id: str

    poster_path: str
    creator_id: str

    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Settings:
        name = "movies"

    async def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        self.updated_at = datetime.now()
        await super().save(*args, **kwargs)
