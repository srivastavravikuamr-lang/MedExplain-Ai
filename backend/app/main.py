from fastapi import FastAPI
from app.routes.upload import router as upload_router

app = FastAPI(
    title="MedExplain AI API",
    description="AI Powered Blood Report Analysis",
    version="1.0.0"
)

app.include_router(upload_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to MedExplain AI Backend 🚀"
    }