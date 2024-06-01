from fastapi import APIRouter, HTTPException
from app.crud import nutrition as crud_nutrition

router = APIRouter()

@router.post("/update_all_menus/")
async def update_all_menus():
    updated_menus = await crud_nutrition.update_all_menus()
    return {"updated_menus": updated_menus}