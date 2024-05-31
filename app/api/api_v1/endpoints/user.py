from fastapi import APIRouter, HTTPException
from app.schemas.user import UserCreate, UserInDB, UserLogin
from app.crud import user as crud_user

router = APIRouter()

@router.post("/signup")
async def create_user(user_in: UserCreate):
    # 이메일 도메인 검증
    allowed_domains = ["g.skku.edu", "skku.edu"]
    domain = user_in.email.split("@")[1]
    if domain not in allowed_domains:
        return {"result": 2, "msg": "학교 이메일(@g.skku.edu 또는 @skku.edu)로만 가입 가능합니다."}
    
    # 이메일 중복 확인
    user = await crud_user.get_user_by_email(user_in.email)
    if user:
        return {"result": 1, "msg": "이미 사용중인 이메일 입니다."} 

    # 사용자 생성
    new_user = await crud_user.create_user(user_in.dict())
    return {"result": 0, "msg": "회원가입 성공"} 

@router.post("/login")
async def login(user_in: UserLogin):
    user = await crud_user.get_user_by_email(user_in.email)
    if not user or user_in.password != user["password"]:
        return {"result": 1, "msg": "로그인 실패"}  
    return {"result": 0, "msg": "로그인 성공"} 
