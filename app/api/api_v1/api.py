from fastapi import APIRouter
from app.api.api_v1.endpoints import user, campus, restaurant, menu

api_router = APIRouter()
api_router.include_router(user.router, prefix="/users", tags=["users"])
api_router.include_router(campus.router, prefix="/campuses", tags=["campuses"])
api_router.include_router(restaurant.router, prefix="/restaurants", tags=["restaurants"])
api_router.include_router(menu.router, prefix="/menus", tags=["menus"])