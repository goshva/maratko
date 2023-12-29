import os
from PIL import Image

def resize_images(folder_path, output_folder, new_size):
    # Проверяем, существует ли папка для сохранения измененных изображений
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Перебираем все файлы в папке
    for filename in os.listdir(folder_path):
        # Проверяем, является ли текущий файл изображением
        if filename.endswith((".jpg", ".jpeg", ".png")):
            # Открываем изображение
            image = Image.open(os.path.join(folder_path, filename))
            width, height = image.size   # Get dimensions

            left = (width -new_size[0] )/2
            top = (height - new_size[1])/2
            right = (width + new_size[0])/2
            bottom = (height + new_size[1])/2

            # Crop the center of the image
            image = image.crop((left, top, right, bottom))
            # Изменяем размер изображения
            resized_image = image.resize(new_size)
            # Сохраняем измененное изображение в указанной папке
            resized_image.save(os.path.join(output_folder, filename))

# Пример использования программы
folder_path = "./import"
output_folder = "./output"
new_size = (210, 210)
resize_images(folder_path, output_folder, new_size)