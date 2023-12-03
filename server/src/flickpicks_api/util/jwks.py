import httpx
from jose import jwt, jwk


async def fetch_jwks(uri: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(uri)
        response.raise_for_status()
        return response.json()


def get_public_key(jwks: dict, kid: str):
    for jwk_info in jwks.get("keys", []):
        if jwk_info["kid"] == kid:
            return jwk.construct(jwk_info)


async def verify_token(token: str, jwks_uri: str):
    # Decode the JWT header to find the kid
    headers = jwt.get_unverified_header(token)
    kid = headers["kid"]

    # Fetch JWKS and get the public key
    jwks = await fetch_jwks(jwks_uri)
    public_key = get_public_key(jwks, kid)

    if public_key:
        # Decode the JWT
        # TODO: remove this verify_exp line for production.
        payload = jwt.decode(token, public_key, options={"verify_exp": False})
        return payload
    else:
        raise Exception("Public key not found in JWKS.")
