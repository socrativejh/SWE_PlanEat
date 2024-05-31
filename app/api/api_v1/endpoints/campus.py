from fastapi import APIRouter, HTTPException
from app.schemas.campus import Campus
from app.schemas.restaurant import Restaurant
from app.crud import campus as crud_campus
from app.crud import restaurant as crud_restaurant
from typing import List

router = APIRouter()

@router.get("/campuses", response_model=List[Campus])
async def read_campuses():
    campuses = await crud_campus.get_all_campuses()
    return [Campus(id=campus["_id"], name=campus["name"], map_image_url=campus.get("map_image_url")) for campus in campuses]

@router.get("/campuses/{campus_id}", response_model=Campus)
async def read_campus(campus_id: int):
    campus = await crud_campus.get_campus_by_id(campus_id)
    if not campus:
        raise HTTPException(status_code=404, detail="Campus not found")
    return Campus(id=campus["_id"], name=campus["name"], map_image_url=campus.get("map_image_url"))

@router.get("/campuses/{campus_id}/restaurants", response_model=List[Restaurant])
async def read_restaurants_by_campus(campus_id: int):
    restaurants = await crud_restaurant.get_restaurants_by_campus_id(campus_id)
    if not restaurants:
        raise HTTPException(status_code=404, detail="No restaurants found for this campus")
    return [Restaurant(id=restaurant["_id"], campus_id=restaurant["campus_id"], name=restaurant["name"], location=restaurant["location"], image_url=restaurant["image_url"], menu_ids=restaurant["menu_ids"]) for restaurant in restaurants]
