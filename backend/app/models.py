from pydantic import BaseModel, Field
from typing import Optional

class Comment(BaseModel):
    id: str
    content: str
    user: str
    parent_id: Optional[str] = Field(default=None)

class CommentCreate(BaseModel):
    content: str
    user: str
    parent_id: Optional[str] = Field(default=None)
