from fastapi import APIRouter
from app.api.api_v1.endpoints import user, campus

api_router = APIRouter()
api_router.include_router(user.router, prefix="/users", tags=["users"])
api_router.include_router(campus.router, prefix="/campuses", tags=["campuses"])
