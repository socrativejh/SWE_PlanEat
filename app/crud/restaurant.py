from app.db.mongodb import database

async def get_restaurants_by_campus_id(campus_id: int):
    restaurants_cursor = database.db['restaurants'].find({"campus_id": campus_id})
    restaurants = await restaurants_cursor.to_list(length=None)
    return restaurants