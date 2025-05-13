from pydantic import BaseModel

class CommentSchema(BaseModel):
    content: str
    user: str
    parent_id: str | None = None
