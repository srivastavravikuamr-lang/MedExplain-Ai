from app.services.easyocr_service import extract_text_from_images

images = [
    "temp_images/page_1.png"
]

text = extract_text_from_images(images)

print(text)