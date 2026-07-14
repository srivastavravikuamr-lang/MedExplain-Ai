import easyocr

reader = easyocr.Reader(
    ['en'],
    gpu=False
)


def extract_text_from_images(image_paths):

    text = ""

    for image in image_paths:

        result = reader.readtext(image)

        for item in result:
            text += item[1] + "\n"

    return text