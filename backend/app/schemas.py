from pydantic import BaseModel
from typing import Optional

class CommentSchema(BaseModel):
    content: str
    user: str
    parent_id: Optional[str] = None
