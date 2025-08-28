import requests
from tqdm import tqdm
import re
import time
import random

url = "https://cdn.yzzy29-play.com/20250728/431_66368270/2000k/hls/mixed.m3u8"
response = requests.get(url)

# 使用正则表达式提取所有以.ts结尾的行
ts_files = re.findall(r'(\w+\.ts)', response.text)

# https://cdn.yzzy29-play.com/20250728/431_66368270/2000k/hls/55d4ba09bff8df93c3f4791fad709e61.ts

baseURL = 'https://cdn.yzzy29-play.com/20250728/431_66368270/2000k/hls/'
for ts_file in tqdm(ts_files):
    while True:
        try:
            ts_res = requests.get(baseURL + ts_file, timeout=10)
            if ts_res.status_code == 200:
                with open('南京照相馆.mp4', 'ab') as data:
                    data.write(ts_res.content)
                time.sleep(random.uniform(0.5, 1))
                break
            else:
                print(f"Status Code: {ts_res.status_code}, URL: {baseURL + ts_file}")
        except Exception as e:
            print('请求失败: ' + ts_file)
            time.sleep(2)

print('----------over----------')