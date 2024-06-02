from pydantic import BaseModel
from typing import List

class Restaurant(BaseModel):
    campus_id: int
    name: str
    restaurant_name: str = None
    location: str
    image_url: str
    menu_ids: List[int]