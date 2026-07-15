import re


def extract_blood_parameters(text: str):

    patterns = {
        "hemoglobin": r"Hemoglobin\s*[:\-]?\s*(\d+\.?\d*)",
        "wbc": r"WBC\s*[:\-]?\s*(\d+)",
        "platelets": r"Platelets\s*[:\-]?\s*(\d+)",
        "rbc": r"RBC\s*[:\-]?\s*(\d+\.?\d*)",
        "mcv": r"MCV\s*[:\-]?\s*(\d+\.?\d*)",
        "mch": r"MCH\s*[:\-]?\s*(\d+\.?\d*)"
    }

    result = {}

    for parameter, pattern in patterns.items():

        match = re.search(pattern, text, re.IGNORECASE)

        if match:
            result[parameter] = match.group(1)

    return result