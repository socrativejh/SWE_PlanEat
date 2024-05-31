from app.db.mongodb import database

async def get_campus_by_id(campus_id: int):
    return await database.db['campuses'].find_one({"_id": campus_id})

async def get_all_campuses():
    campuses_cursor = database.db['campuses'].find()
    campuses = await campuses_cursor.to_list(length=None)
    return campuses

async def get_restaurants_by_campus_id(campus_id: int):
    restaurants_cursor = database.db['restaurants'].find({"campus_id": campus_id})
    restaurants = await restaurants_cursor.to_list(length=None)
    return restaurants