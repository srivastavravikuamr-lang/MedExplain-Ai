from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.services.ocr_service import extract_text_from_pdf

router = APIRouter(prefix="/upload", tags=["Upload"])

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/")
async def upload_report(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = ""

    if file.filename.lower().endswith(".pdf"):
        text = extract_text_from_pdf(file_path)

    return {
        "success": True,
        "filename": file.filename,
        "text": text
    }