from pydantic import BaseModel
from typing import List
 
class Menu(BaseModel):
    name: str
    protein: float
    sugar: float
    carbo: float
    fat: float
    kcal: int
    price: int
    allergy: List[int]
    date: str
    mealtime: int