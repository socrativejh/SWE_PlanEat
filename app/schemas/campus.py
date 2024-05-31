from pydantic import BaseModel
from typing import List

class Campus(BaseModel):
    name: str
    map_image_url: str
