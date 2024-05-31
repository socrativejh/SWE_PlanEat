from pymongo import MongoClient

mongodb_URI = "mongodb://swe:planeat1234@3.37.184.136:27017"
DATABASE_NAME = "swe"

client = MongoClient(mongodb_URI)
db = client[DATABASE_NAME]
