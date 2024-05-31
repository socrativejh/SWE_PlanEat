from app.db.mongodb import database
from app.core.security import get_password_hash, verify_password
from bson import ObjectId

async def create_user(user_data: dict):
    user_data["password"] = get_password_hash(user_data["password"])
    user_data["allergies"] = [ObjectId(allergy) for allergy in user_data["allergies"]]
    user = await database.db['users'].insert_one(user_data)
    new_user = await database.db['users'].find_one({"_id": user.inserted_id})
    return new_user

async def get_user_by_email(email: str):
    return await database.db['users'].find_one({"email": email})
