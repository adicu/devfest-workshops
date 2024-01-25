from fastapi import HTTPException, status, Request

from flickpicks_api.util.jwks import verify_token
from flickpicks_api.models.user import User
from flickpicks_api.config import CONFIG


async def fetch_user(clerk_id: str) -> User:
    """Fetch user from MongoDB"""
    user = await "--(1)--"
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found in database.",
        )

    return user


async def current_user(
    request: Request,
    jwks_uri: str = CONFIG.clerk_jwks_uri,
) -> User:
    authorization = request.headers.get("Authorization")
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authorization header missing",
        )

    token = authorization.split(" ")[1]
    try:
        payload = await verify_token("--(2)--", jwks_uri)
        user = await fetch_user(payload["sub"])
        return user
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
