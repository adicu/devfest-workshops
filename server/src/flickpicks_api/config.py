import os

from pydantic import BaseModel

from dotenv import load_dotenv

load_dotenv()


class Config(BaseModel):
    mongo_uri: str = os.environ.get("MONGO_URI", default="mongodb://localhost:27017")
    clerk_webhook_secret: str = os.environ.get("CLERK_WEBHOOK_SECRET", default="")
    clerk_jwks_uri: str = os.environ.get("CLERK_JWKS_URI", default="")
    tmdb_api_key: str = os.environ.get("TMDB_API_TOKEN", default="")


CONFIG = Config()
