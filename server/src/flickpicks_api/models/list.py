from datetime import datetime

from beanie import Document, PydanticObjectId

from typing import Optional


class MovieList(Document):
    name: str
    description: str

    creator_id: str
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
