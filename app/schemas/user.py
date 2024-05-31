from pydantic import BaseModel, EmailStr, validator
from typing import List
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_pydantic_core_schema__(cls, _schema_generator):
        from pydantic_core import core_schema
        return core_schema.str_schema()

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid ObjectId')
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    allergies: List[int]
    campus_id: int

class UserInDB(UserCreate):
    id: str

    class Config:
        json_encoders = {
            ObjectId: str
        }

class UserLogin(BaseModel):
    email: str
    password: str
    
class UserResponse(BaseModel):
    result: int
    msg: str