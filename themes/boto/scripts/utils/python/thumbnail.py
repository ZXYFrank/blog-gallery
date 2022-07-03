import os
import time
import sys
from PIL import Image


def compress(img, maxwidth=800, maxheight=800):
    w, h = img.size
    r = min(maxwidth / w, maxheight / h)
    new_w = int(w * r)
    new_h = int(h * r)
    return img.resize((new_w, new_h), Image.ANTIALIAS)


print("========thumbnail.py========")
gallery_dir = sys.argv[1]
print("gallery_dir = " + gallery_dir)
gallery_raw_imgs_dir = os.path.join(gallery_dir, "imgs")
imgs_list = list(sorted(os.listdir(gallery_raw_imgs_dir)))
print("imgs: ", imgs_list)
thumbnail_dir = os.path.join(gallery_dir, "thumbnails")
os.makedirs(thumbnail_dir, exist_ok=True)

for img_name in imgs_list:
    img_path = os.path.join(gallery_raw_imgs_dir, img_name)
    img = Image.open(img_path)
    compressed_img = compress(img)
    compressed_img.save(os.path.join(thumbnail_dir, img_name),
                        optimize=True,
                        quality=95)
