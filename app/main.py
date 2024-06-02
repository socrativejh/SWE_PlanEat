from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from app.api.api_v1.api import api_router
from app.db.mongodb import connect_to_mongo, close_mongo_connection
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정
origins = [
    "http://localhost:3000",  # React 앱이 실행되는 도메인
    "http://127.0.0.1:3000",  # 추가로 허용할 도메인
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_mongo_connection()
    
@app.get("/", response_class=HTMLResponse)
def read_root():
    html_content = """
    <html>
        <head>
            <title>Welcome to PlanEat</title>
        </head>
        <body>
            <h1>Welcome to PlanEat</h1>
            <p>You can test the API using the following documentation pages:</p>
            <ul>
                <li><a href="/docs">Swagger UI (docs)</a></li>
                <li><a href="/redoc">ReDoc</a></li>
            </ul>
        </body>
    </html>
    """
    return HTMLResponse(content=html_content)

app.include_router(api_router, prefix="/api/v1")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)