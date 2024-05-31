from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

class Database:
    client: AsyncIOMotorClient = None
    db = None

database = Database()

async def connect_to_mongo():
    database.client = AsyncIOMotorClient(settings.MONGODB_URI)
    database.db = database.client[settings.DATABASE_NAME]

async def close_mongo_connection():
    database.client.close()