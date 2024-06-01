from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGODB_URI: str
    DATABASE_NAME: str
    OPENAI_API_KEY: str
    class Config:
        env_file = ".env"

settings = Settings()