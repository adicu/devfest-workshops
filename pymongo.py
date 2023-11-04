from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

#fast api??
app = FastAPI()

# private connection string for atlas??
client = MongoClient("mongodb+srv://dizzily:0rTHSPWwlLGVoExj@cluster0.ypdasjk.mongodb.net/?retryWrites=true&w=majority") 

# Connect to your database
db = client["moviedatabase"]  # movie database??

class Item(BaseModel):
    name: str
    description: str

#post??
@app.post("/items/", response_model=Item)
def create_item(item: Item):
    result = db.items.insert_one(item.dict())
    item._id = str(result.inserted_id)
    return item

#get??
@app.get("/items/{item_id}", response_model=Item)
def read_item(item_id: str):
    item = db.items.find_one({"_id": item_id})
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

#get many
@app.get("/items/", response_model=list[Item])
def read_items(skip: int = 0, limit: int = 10):
    items = list(db.items.find().skip(skip).limit(limit))
    return items




