from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class Menu(BaseModel):
    id: Optional[int] = Field(None, alias="_id")
    name: str
    protein: Optional[float]
    sugar: Optional[float]
    carbo: Optional[float]
    fat: Optional[float]
    kcal: Optional[int]
    price: Optional[int]
    allergy: Optional[List[int]]
    date: Optional[datetime]
    mealtime: Optional[int]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {int: str}

class MenuRequest(BaseModel):
    name: str

    class Config:
        arbitrary_types_allowed = True
