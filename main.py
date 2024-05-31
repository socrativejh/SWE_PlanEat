from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
import openai
import re
import os
from dotenv import load_dotenv
from models import Menu, MenuRequest
from database import db

app = FastAPI()
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# 알레르기 및 태그 매핑
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

# 기준 설정
HIGH_PROTEIN_THRESHOLD = 15  # g
LOW_CALORIE_THRESHOLD = 400  # kcal
COST_EFFECTIVE_THRESHOLD = 5000  # 원

# GPT API를 호출하여 영양정보와 알레르기 정보를 가져오는 함수
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
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150
        )
        gpt_response = response.choices[0].message['content'].strip()
        print(f"GPT Response for '{name}': {gpt_response}")  # GPT 응답 로그 출력
        return gpt_response
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        raise HTTPException(status_code=500, detail=f"Error calling OpenAI API: {e}")

# 알레르기 ID를 부여하는 함수
def assign_allergy_ids(allergies: str) -> list:
    allergy_ids = []
    for allergy in allergies.split(","):
        allergy = allergy.strip().lower()
        if allergy in allergy_mapping:
            allergy_ids.append(allergy_mapping[allergy])
    return allergy_ids

# 태그 ID를 부여하는 함수
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

# 모든 메뉴 정보를 업데이트하는 엔드포인트
@app.post("/update_all_menus/")
async def update_all_menus():
    menus = db['menus'].find({}, {"name": 1})  # 메뉴 이름만 가져옴
    updated_menus = []

    for menu in menus:
        gpt_response = await get_menu_info_from_gpt(menu['name'])

        try:
            lines = gpt_response.split("\n")
            menu_info = {}
            for line in lines:
                if ": " in line:
                    key, value = line.split(": ", 1)
                    menu_info[key.strip().lower()] = value.strip()
            print(f"Parsed menu info for '{menu['name']}': {menu_info}")

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

            current_menu = db['menus'].find_one({"_id": menu["_id"]})
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

            db['menus'].update_one({"_id": menu["_id"]}, {"$set": menu_document})
            updated_menus.append(menu_document)

        except ValueError as ve:
            print(f"ValueError occurred while parsing menu info for '{menu['name']}': {ve}")
            continue
        except Exception as e:
            print(f"Failed to parse GPT response for '{menu['name']}']: {e}")
            raise HTTPException(status_code=400, detail=f"Failed to parse GPT response: {str(e)}")

    print(f"Updated menus: {updated_menus}") 
    return JSONResponse(content={"updated_menus": updated_menus})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


