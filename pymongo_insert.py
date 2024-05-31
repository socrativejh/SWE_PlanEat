from pymongo import MongoClient
from datetime import datetime

client = MongoClient('mongodb://swe:planeat1234@3.37.184.136', 27017)

mydb = client['swe']
# mycol = mydb['restaurants']

restaurants_insert = []
campus_id = [1, 2]

names_1 = ["패컬리티식당", "은행골식당", "법고을식당", "옥류천식당", "금잔디식당"]
locations_1 = ["600주년기념관 6층", "600주년기념관 지하1층", "법학관 지하 2층", "교수회관 1층", "경영관 지하2층"]
image_urls_1 = ["https://www.skku.edu/_attach/image/2018/07/MjvkijYoFCQBDoHmiyTA.jpg", "https://www.skku.edu/_attach/image/2018/07/MKwbUWfkYrKiXySZHcPl.jpg", "https://www.skku.edu/_attach/image/2018/07/kcjHMNlxAUVJLEETBtRh.jpg", "https://www.skku.edu/_attach/image/2024/01/lAgPDUVgGISFCLukriIF.jpg", "https://www.skku.edu/_attach/image/2018/07/HUMHbfHzYoGzIOheZlPc.jpg"]

names_2 = ["행단골", "교직원식당(구시재)", "공대식당(해오름)"]
locations_2 = ["학생회관 1층", "복지회관 3층", "제2공학관26동 지하1층"]
image_urls_2 = ["https://www.skku.edu/_attach/image/2018/07/zJWqScaSOrhyxPqCBMrE.jpg", "https://www.skku.edu/_attach/image/2018/07/CtFPInNaLctrGYbJZzKb.jpg", "https://www.skku.edu/_attach/image/2023/05/EXjfZczaAjQeKlkJpdLx.jpg"]

for id in campus_id:
    if id == 1:
        for image_url, name, location in zip(image_urls_1, names_1, locations_1):
            item = {
                "campus_id": id,
                "name": name,
                "location": location,
                "map": {
                    "campus_id": id,
                    "image_url":
                        image_url
                },
                "menu_ids": [1, 2]
            }
    else:
        for image_url, name, location in image_urls_2, names_2, locations_2:
            item = {
                "campus_id": id,
                "name": name,
                "location": location,
                "map": {
                    "campus_id": id,
                    "image_url":
                        image_url
                },
                "menu_ids": [1, 2]
            }
    restaurants_insert.append(item)

users_insert = [
    {
        "email": "user1@g.skku.edu",
        "password": "pw1",
        "allergies": [2, 9],
        "campus_id": 1,
    },
    {
        "email": "user2@skku.edu",
        "password": "pw2",
        "allergies": [3],
        "campus_id": 2,
    }
]

tags_insert = [
    { "_id": 1, "tag_type": "cost-effective" },
    { "_id": 2, "tag_type": "high-protein" },
    { "_id": 3, "tag_type": "vegan" },
    { "_id": 4, "tag_type": "low-calorie" }
]

allergies_insert = [
    { "_id": 1, "allergy_type": "none" },
    { "_id": 2, "allergy_type": "dairy" },
    { "_id": 3, "allergy_type": "shellfish" },
    { "_id": 4, "allergy_type": "soy" },
    { "_id": 5, "allergy_type": "wheat" },
    { "_id": 6, "allergy_type": "squid" },
    { "_id": 7, "allergy_type": "peach" },
    { "_id": 8, "allergy_type": "tomato" },
    { "_id": 9, "allergy_type": "nuts" },
]

menus_insert = [
    {
        "_id": 1,
        "name": "탄탄면",
        "protein": 10.5,
        "sugar": 10.2,
        "carbo": 30.3,
        "fat": 15.0,
        "kcal": 500,
        "price": 6000,
        "allergy": [5, 9],
        "date": datetime(2023, 5, 31),
        "mealtime": 1,
    },
    {
        "_id": 2,
        "name": "폭신폭신따바오",
        "protein": 20.5,
        "sugar": 9.2,
        "carbo": 30.3,
        "fat": 20.0,
        "kcal": 550,
        "price": 6000,
        "allergy": [5],
        "date": datetime(2023, 6, 1),
        "mealtime": 2,
    }
]

meal_times = [
    {
        "_id": 1,
        "start_time": "08:00:00",
        "end_time": "09:00:00",
    },
    {
        "_id": 2,
        "start_time": "08:00:00",
        "end_time": "13:30:00",
    },
    {
        "_id": 3,
        "start_time": "11:00:00",
        "end_time": "18:30:00",
    },
]

# insert
mydb['restaurants'].insert_many(restaurants_insert)
mydb['users'].insert_many(users_insert)
mydb['tags'].insert_many(tags_insert)
mydb['allergies'].insert_many(allergies_insert)