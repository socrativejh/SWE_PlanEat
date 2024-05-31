from fastapi import APIRouter, HTTPException
from app.schemas.user import UserCreate, UserInDB, UserLogin
from app.crud import user as crud_user

router = APIRouter()

@router.post("/signup", response_model=UserInDB)
async def create_user(user_in: UserCreate):
    user = await crud_user.get_user_by_email(user_in.email)
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = await crud_user.create_user(user_in.dict())
    return new_user

@router.post("/login")
async def login(user_in: UserLogin):
    user = await crud_user.get_user_by_email(user_in.email)
    if not user or user_in.password != user["password"]:
        return 1  # 실패 시 1 반환
    return 0  # 성공 시 0 반환
