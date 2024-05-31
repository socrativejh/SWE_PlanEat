from pydantic import BaseModel, EmailStr
from typing import List

class User(BaseModel):
    email: EmailStr
    password: str
    allergies: List[int]
    campus_id: int
