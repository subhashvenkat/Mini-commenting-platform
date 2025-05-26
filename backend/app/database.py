from bson import ObjectId
from backend.app.schemas import CommentSchema
from backend.app.models import Comment
import motor.motor_asyncio
import os

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client.comments_db

async def create_database():
    await db.command("ping")

async def create_comment(comment: CommentSchema):
    result = await db.comments.insert_one(comment.dict())
    return {**comment.dict(), "id": str(result.inserted_id)}

async def delete_comment(comment_id: str):
    result = await db.comments.delete_one({"_id": ObjectId(comment_id)})
    return result.deleted_count > 0

async def get_comments():
    comments = []
    comment_map = {}

    async for doc in db.comments.find():
        comment = {**doc, "id": str(doc["_id"]), "replies": []}
        comment_map[comment["id"]] = comment
        comments.append(comment)

    # Nesting
    root_comments = []
    for comment in comments:
        parent_id = str(comment.get("parent_id")) if comment.get("parent_id") else None
        if parent_id and parent_id in comment_map:
            comment_map[parent_id]["replies"].append(comment)
        else:
            root_comments.append(comment)

    return [Comment(**c) for c in root_comments]
