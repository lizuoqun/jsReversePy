import requests
from PIL import Image, ImageSequence
import io
import uuid


def webp_to_gif(url):
    # 下载图片
    response = requests.get(url)
    img_data = io.BytesIO(response.content)

    # 打开 WebP 图像
    webp_image = Image.open(img_data)

    # 创建 GIF 的帧列表
    frames = [frame.copy() for frame in ImageSequence.Iterator(webp_image)]

    # 设置保存路径
    gif_path = f"{uuid.uuid4()}.gif"

    # 保存为 GIF
    frames[0].save(
        gif_path,
        save_all=True,
        append_images=frames[1:],
        duration=webp_image.info.get("duration", 100),
        loop=0,
        disposal=2,
        transparency=0
    )

    return gif_path


url = 'https://p9-im-emoticon-sign.byteimg.com/tos-cn-o-0812/oUPRDf75yEWDQfJVOAogFCHKItxRAAbQCAmACC~tplv-0wx4r9yasq-awebp-resize:0:0.awebp?biz_tag=aweme_im&lk3s=91c5b7cb&s=im_123&sc=emotion&x-expires=1782205480&x-signature=Jx1xKc4gIbu5895q8gpVT176t84%3D'

webp_to_gif(url)
