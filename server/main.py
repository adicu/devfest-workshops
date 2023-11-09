from typing import Union, Annotated, Optional

from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
import motor.motor_asyncio
import hashlib

import os

app = FastAPI()

scheme = OAuth2PasswordBearer(tokenUrl="token")

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://127.0.0.1:27017')
db = client.get_database("workshop") #db name
authInfo = db.get_collection("authcollection") # table with uname + pw hash

class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None

async def get_current_user(token: Annotated[str, Depends(scheme)]):
    if token in authInfo:
        return authInfo[token]

async def get_current_active_user(current_user: Annotated[User, Depends(get_current_user)]):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/login/")
async def read_items(token: Annotated[str, Depends(scheme)]):
    return {"token": token}


@app.get("/users/me")
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user

@app.post("/token/")
async def authenticate(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    user_info = await authInfo.find_one({"username": form_data.username})
    print(user_info)
    if not user_info:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    m = hashlib.sha256()
    m.update(form_data.password.encode())
    if (str(m.hexdigest()) == str(user_info["pw"])):
        return {"access_token": user_info["username"], "token_type": "bearer"}
    else:
        raise HTTPException(status_code=400, detail="Incorrect username or password")