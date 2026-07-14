from app.utils.pdf_converter import convert_pdf_to_images

pdf = "uploads/sample.pdf"

output = "temp_images"

images = convert_pdf_to_images(pdf, output)

print(images)