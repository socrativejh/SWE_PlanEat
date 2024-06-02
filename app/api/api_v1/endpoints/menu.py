from fastapi import APIRouter, HTTPException
from app.schemas.menu import Menu
from app.crud import menu as crud_menu
from typing import List

router = APIRouter()

@router.get("/", response_model=List[Menu])
async def read_campuses():
    menus = await crud_menu.get_all_menus()
    print(menus)
    return [Menu(id=menu["_id"], name=menu["name"], protein=menu["protein"], sugar=menu["sugar"], carbo=menu["carbo"], fat=menu["fat"], kcal=menu["kcal"], price=menu["price"], allergy=menu["allergy"], date=menu["date"], mealtime=menu["mealtime"], tags=menu["tags"]) for menu in menus]

@router.get("/{menu_id}", response_model=Menu)
async def read_menu(menu_id: int):
    menu = await crud_menu.get_menu_by_id(menu_id)
    if not menu:
        raise HTTPException(status_code=404, detail="Menu not found")
    print(menu)
    return Menu(id=menu["_id"], name=menu["name"], protein=menu["protein"], sugar=menu["sugar"], carbo=menu["carbo"], fat=menu["fat"], kcal=menu["kcal"], price=menu["price"], allergy=menu["allergy"], date=menu["date"], mealtime=menu["mealtime"], tags=menu["tags"])
