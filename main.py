from fastapi import FastAPI, HTTPException  
from routes import movie

app = FastAPI()
app.include_router(movie)

