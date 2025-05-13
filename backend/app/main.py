from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.models import Comment
from backend.app.database import get_comments, create_comment, delete_comment
from backend.app.schemas import CommentSchema

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/comments", response_model=list[Comment])
async def read_comments():
    return await get_comments()

@app.post("/comments", response_model=Comment)
async def add_comment(comment: CommentSchema):
    return await create_comment(comment)

@app.delete("/comments/{comment_id}", response_model=bool)
async def remove_comment(comment_id: str):
    return await delete_comment(comment_id)
