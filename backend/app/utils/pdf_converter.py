from pdf2image import convert_from_path
import os

POPPLER_PATH = r"C:\poppler\poppler-26.02.0\Library\bin"


def convert_pdf_to_images(pdf_path: str, output_folder: str):

    os.makedirs(output_folder, exist_ok=True)

    images = convert_from_path(
        pdf_path,
        poppler_path=POPPLER_PATH
    )

    image_paths = []

    for index, image in enumerate(images):

        image_path = os.path.join(
            output_folder,
            f"page_{index+1}.png"
        )

        image.save(image_path)

        image_paths.append(image_path)

    return image_paths