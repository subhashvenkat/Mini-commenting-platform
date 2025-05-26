from pydantic import BaseModel, Field
from typing import Optional, List

class Comment(BaseModel):
    id: str
    content: str
    user: str
    parent_id: Optional[str] = None
    replies: Optional[List['Comment']] = []

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True

Comment.update_forward_refs()
