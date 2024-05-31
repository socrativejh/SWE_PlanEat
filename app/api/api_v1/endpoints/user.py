from fastapi import APIRouter, HTTPException
from app.schemas.user import UserCreate, UserInDB
from app.crud import user as crud_user
from app.core.security import verify_password
from pydantic import BaseModel

router = APIRouter()

@router.post("/signup", response_model=UserInDB)
async def create_user(user_in: UserCreate):
    user = await crud_user.get_user_by_email(user_in.email)
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = await crud_user.create_user(user_in.dict())
    return new_user

class UserLogin(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(user_in: UserLogin):
    user = await crud_user.get_user_by_email(user_in.email)
    if not user or not verify_password(user_in.password, user["password"]):
        raise HTTPException(status_code=400, detail="Invalid email or password")
    return {"msg": "Login successful"}
