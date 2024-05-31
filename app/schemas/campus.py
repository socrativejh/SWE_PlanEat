from pydantic import BaseModel
from typing import List

class Campus(BaseModel):
    id: int
    name: str
    map_image_url: str
