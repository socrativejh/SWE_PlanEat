from app.db.mongodb import database

async def get_menu_by_id(menu_id: int):
    return await database.db['menus'].find_one({"_id": menu_id})

async def get_all_menus():
    menus_cursor = database.db['menus'].find()
    menus = await menus_cursor.to_list(length=None)
    return menus