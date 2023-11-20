from fastapi import APIRouter
from models.model import * 
from db import * 
from schemas import *
from bson import ObjectId
movie = APIRouter() 

@movie.get('/')
async def find_all_movies():
    return serializeList(conn.local.movies.find())

# @user.get('/{id}')
# async def find_one_user(id):
#     return serializeDict(conn.local.user.find_one({"_id":ObjectId(id)}))

@movie.post('/')
async def create_movie(movie: Movie):
    conn.local.movie.insert_one(dict(movie))
    return serializeList(conn.local.movie.find())

@movie.put('/{id}')
async def update_movie(id,movie: Movie):
    conn.local.movie.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(movie)
    })
    return serializeDict(conn.local.movie.find_one({"_id":ObjectId(id)}))

@movie.delete('/{id}')
async def delete_movie(id,movie: Movie):
    return serializeDict(conn.local.movie.find_one_and_delete({"_id":ObjectId(id)}))
