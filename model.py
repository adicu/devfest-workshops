from pydantic import BaseModel

class Movie(BaseModel):
    movie: str
    user_id: str
    reviews: list
