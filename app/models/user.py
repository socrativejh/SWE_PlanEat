from pydantic import BaseModel, EmailStr

class User(BaseModel):
    email: EmailStr
    password: str
    campus: str # 명륜인지 율전인지 체크
    allergies: list[int]
    
