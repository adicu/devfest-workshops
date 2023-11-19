from pymongo import MongoClient
from fastapi import FastAPI, HTTPException

# FastAPI
app = FastAPI()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")

# Connect to the database
db = client["devfest"]

#insert data into a collection
movies_collection = db["movies"]

#insert data 
@app.post("/add_movie/")
def add_movie(user_id: str, movie_id: str, review: str):



#

# Endpoint to get reviews for a user
@app.get("/get_user_reviews/{user_id}")
def get_user_reviews(user_id: str):
    user = users.find_one({"_id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user.get("reviews", [])

# Endpoint to add a movie review for a user
@app.post("/add_review/")
def add_review(movie_id: str, user_id: str, review: str):
    movie = movies.find_one({"_id": movie_id})
    if not movie:
        raise HTTPException(status_code=404, detail="Movie not found")

    # Update movie with user review
    movies.update_one(
        {"_id": movie_id},
        {"$push": {"reviews": {"user_id": user_id, "review": review}}}
    )

    # Update user with movie review
    users.update_one(
        {"_id": user_id},
        {"$push": {"reviews": {"movie_id": movie_id, "review": review}}}
    )

    return {"message": "Review added successfully"}


