from app.db.mongodb import database
from app.core.config import settings
import openai
import re

openai.api_key = settings.OPENAI_API_KEY

allergy_mapping = {
    "none": 1,
    "dairy": 2,
    "shellfish": 3,
    "soy": 4,
    "wheat": 5,
    "squid": 6,
    "peach": 7,
    "tomato": 8,
    "nuts": 9,
}

tag_mapping = {
    "cost-effective": 1,
    "high-protein": 2,
    "vegan": 3,
    "low-calorie": 4,
}

HIGH_PROTEIN_THRESHOLD = 15
LOW_CALORIE_THRESHOLD = 400
COST_EFFECTIVE_THRESHOLD = 5000

async def update_all_menus():
    menus = database.db['menus'].find({}, {"name": 1})
    updated_menus = []

    async for menu in menus:
        gpt_response = await get_menu_info_from_gpt(menu['name'])

        try:
            lines = gpt_response.split("\n")
            menu_info = {}
            for line in lines:
                if ": " in line:
                    key, value = line.split(": ", 1)
                    menu_info[key.strip().lower()] = value.strip()

            if 'protein' not in menu_info or 'sugar' not in menu_info or 'carbo' not in menu_info or 'fat' not in menu_info or 'kcal' not in menu_info or 'allergy' not in menu_info or 'vegan' not in menu_info:
                raise ValueError(f"Incomplete nutritional information for {menu['name']}")

            protein = float(menu_info.get("protein", "0").replace("g", "").strip())
            sugar = float(menu_info.get("sugar", "0").replace("g", "").strip())
            carbo = float(menu_info.get("carbo", "0").replace("g", "").strip())
            fat = float(menu_info.get("fat", "0").replace("g", "").strip())
            kcal = int(menu_info.get("kcal", "0").strip())
            allergies = menu_info.get("allergy", "")
            vegan = menu_info.get("vegan", "no")

            allergy_ids = assign_allergy_ids(allergies)

            current_menu = await database.db['menus'].find_one({"_id": menu["_id"]})
            if current_menu and "price" in current_menu:
                price = current_menu["price"]
            else:
                price = 0

            tag_ids = assign_tag_ids(protein, kcal, price, vegan)

            menu_document = {
                "protein": protein,
                "sugar": sugar,
                "carbo": carbo,
                "fat": fat,
                "kcal": kcal,
                "allergy": allergy_ids,
                "tags": tag_ids,
            }

            await database.db['menus'].update_one({"_id": menu["_id"]}, {"$set": menu_document})
            updated_menus.append(menu_document)

        except ValueError as ve:
            print(f"ValueError occurred while parsing menu info for '{menu['name']}': {ve}")
            continue
        except Exception as e:
            print(f"Failed to parse GPT response for '{menu['name']}']: {e}")
            continue

    return updated_menus

async def get_menu_info_from_gpt(name: str) -> str:
    prompt = (
        f"Please provide the typical nutritional information, common allergy details, and whether it is vegan for a generic version of the menu item '{name}' in the following format:\n\n"
        f"Protein: [value] g\n"
        f"Sugar: [value] g\n"
        f"Carbo: [value] g\n"
        f"Fat: [value] g\n"
        f"Kcal: [value]\n"
        f"Allergy: [one or more of these: none, dairy, shellfish, soy, wheat, squid, peach, tomato, nuts]\n"
        f"Vegan: [yes or no]\n\n"
        f"Do not provide any other information or explanation."
    )
    response = await openai.ChatCompletion.acreate(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=150
    )
    return response.choices[0].message['content'].strip()

def assign_allergy_ids(allergies: str) -> list:
    allergy_ids = []
    for allergy in allergies.split(","):
        allergy = allergy.strip().lower()
        if allergy in allergy_mapping:
            allergy_ids.append(allergy_mapping[allergy])
    return allergy_ids

def assign_tag_ids(protein: float, kcal: int, price: int, vegan: str) -> list:
    tag_ids = []
    if price <= COST_EFFECTIVE_THRESHOLD:
        tag_ids.append(tag_mapping["cost-effective"])
    if protein >= HIGH_PROTEIN_THRESHOLD:
        tag_ids.append(tag_mapping["high-protein"])
    if kcal <= LOW_CALORIE_THRESHOLD:
        tag_ids.append(tag_mapping["low-calorie"])
    if vegan.lower() == "yes":
        tag_ids.append(tag_mapping["vegan"])
    return tag_ids