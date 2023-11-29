import os

from pydantic import BaseModel


class Config(BaseModel):
    mongo_uri = os.environ["MONGO_URI"]
    clerk_webhook_secret = os.environ["CLERK_WEBHOOK_SECRET"]
    clerk_jwks_uri = os.environ["CLERK_JWKS_URI"]
    tmdb_api_key = os.environ["TMDB_API_KEY"]


CONFIG = Config()
