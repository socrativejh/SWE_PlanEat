from pydantic import BaseModel
from typing import List

class CampusBase(BaseModel):
    name: str
    map_image_url: str

class CampusInDB(CampusBase):
    id: int