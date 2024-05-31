from pydantic import BaseModel
from typing import List

class RestaurantBase(BaseModel):
    campus_id: int
    name: str
    location: str
    image_url: str
    menu_ids: List[int]

class RestaurantInDB(RestaurantBase):
    id: int