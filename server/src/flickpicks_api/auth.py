import os
from typing import Optional

from fastapi import HTTPException, status, Request
from jose import jwt
from datetime import datetime, timezone
from pydantic import BaseModel
import httpx

from fastapi import Depends, HTTPException, status, Request

from flickpicks_api.jwks import verify_token

backend_key = os.environ.get("CLERK_BACKEND_API_KEY")


async def fetch_user(user_id: str, authorization: str):
    # Fetch user from Clerk API
    async with httpx.AsyncClient() as client:
        user = await client.get(
            "https://api.clerk.dev/v1/users/" + user_id,
            headers={"Authorization": f"Bearer {backend_key}"},
        )
        user.raise_for_status()
        return user.json()


async def jwt_auth(
    request: Request,
    jwks_uri: str = "https://ready-feline-27.clerk.accounts.dev/.well-known/jwks.json",
):
    authorization = request.headers.get("Authorization")
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authorization header missing",
        )

    token = authorization.split(" ")[1]
    try:
        payload = await verify_token(token, jwks_uri)
        print(payload)

        # Fetch user from Clerk API
        user = await fetch_user(payload["sub"], authorization)

        print(user)

        return user  # Or extract specific user data from payload

    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
