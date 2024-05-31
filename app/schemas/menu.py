from pydantic import BaseModel
from typing import List
from datetime import datetime
 
class Menu(BaseModel):
    id: int
    name: str
    protein: float
    sugar: float
    carbo: float
    fat: float
    kcal: int
    price: int
    allergy: List[int]
    date: datetime
    mealtime: int
    tags: List[int]