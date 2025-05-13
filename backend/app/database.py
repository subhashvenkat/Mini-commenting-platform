import motor.motor_asyncio
from backend.app.models import CommentCreate
from bson import ObjectId

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")
db = client.comments_db

async def create_database():
    await db.command("ping")

async def get_comments():
    comments = []
    async for comment in db.comments.find():
        comments.append(Comment(**{**comment, "id": str(comment["_id"])}))
    return comments

async def create_comment(comment: CommentCreate):
    result = await db.comments.insert_one(comment.dict())
    return {**comment.dict(), "id": str(result.inserted_id)}

async def delete_comment(comment_id: str):
    result = await db.comments.delete_one({"_id": ObjectId(comment_id)})
    return result.deleted_count > 0
