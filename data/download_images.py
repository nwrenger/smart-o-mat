import os
import requests


def download_images(root_url, filenames, save_folder="../static/parties"):
    os.makedirs(save_folder, exist_ok=True)

    for filename in filenames:
        image_url = f"{root_url}/{filename}"
        save_path = os.path.join(save_folder, filename)

        try:
            response = requests.get(image_url, stream=True)
            response.raise_for_status()

            with open(save_path, "wb") as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)

            print(f"Downloaded: {filename}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to download {filename}: {e}")


root_url = "https://wahl-o-mat.de/bundestagswahl2025/app/images/"
image_files = [
    "parteien_logo_49269.png",
    "parteien_logo_49266.png",
    "parteien_logo_49264.png",
    "parteien_logo_49279.png",
    "parteien_logo_49272.png",
    "parteien_logo_49281.png",
    "parteien_logo_49262.png",
    "parteien_logo_49218.png",
    "parteien_logo_49244.png",
    "parteien_logo_49283.png",
    "parteien_logo_49234.png",
    "parteien_logo_49689.png",
    "parteien_logo_49220.png",
    "parteien_logo_49303.png",
    "parteien_logo_49307.png",
    "parteien_logo_49223.png",
    "parteien_logo_49248.png",
    "parteien_logo_49294.png",
    "parteien_logo_49547.png",
    "parteien_logo_49292.png",
    "parteien_logo_49288.png",
    "parteien_logo_49231.png",
    "parteien_logo_49545.png",
    "parteien_logo_49529.png",
    "parteien_logo_49301.png",
    "parteien_logo_49225.png",
    "parteien_logo_49286.png",
    "parteien_logo_49993.png"
]
download_images(root_url, image_files)
