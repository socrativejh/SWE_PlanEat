from app.db.mongodb import database
from bson import ObjectId

async def create_user(user_data: dict):
    user = await database.db['users'].insert_one(user_data)
    new_user = await database.db['users'].find_one({"_id": user.inserted_id})
    if new_user:
        new_user["id"] = str(new_user["_id"])  # _id를 id로 변환
        del new_user["_id"]  # _id 필드를 삭제
    return new_user

async def get_user_by_email(email: str):
    user = await database.db['users'].find_one({"email": email})
    if user:
        user["id"] = str(user["_id"])  # _id를 id로 변환
        del user["_id"]  # _id 필드를 삭제
    return user
