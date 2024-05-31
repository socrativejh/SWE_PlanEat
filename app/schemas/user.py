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

    @validator("email")
    def validate_email_domain(cls, value):
        allowed_domains = ["g.skku.edu", "skku.edu"]
        domain = value.split("@")[1]
        if domain not in allowed_domains:
            raise ValueError("학교 이메일로만 가입 가능합니다. (g.skku.edu 또는 skku.edu)")
        return value

class UserInDB(UserCreate):
    id: str

    class Config:
        json_encoders = {
            ObjectId: str
        }

class UserLogin(BaseModel):
    email: str
    password: str
