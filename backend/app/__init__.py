from fastapi import FastAPI
from backend.app.database import create_database

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    await create_database()

from backend.app import main
