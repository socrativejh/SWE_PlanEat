from app.db.mongodb import database
from typing import List

async def get_menu_by_id(menu_id: int):
    return await database.db['menus'].find_one({"_id": menu_id})

async def get_all_menus():
    menus_cursor = database.db['menus'].find()
    menus = await menus_cursor.to_list(length=None)
    return menus

async def get_menu_ids_by_tags(tags: List[int]):
    menus_cursor = database.db['menus'].find({"tags": {"$all": tags}}, {"_id": 1})
    menus = await menus_cursor.to_list(length=None)
    menu_ids = [menu["_id"] for menu in menus]
    return menu_ids