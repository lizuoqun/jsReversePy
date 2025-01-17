import re
import os
from bs4 import BeautifulSoup
import requests

cookies = {
    '__51vcke__3KS4zHfAg9m3f4aZ': '912c6f77-6589-5d34-b303-3b7535abb3c2',
    '__51vuft__3KS4zHfAg9m3f4aZ': '1737081740534',
    '__51uvsct__3KS4zHfAg9m3f4aZ': '2',
    '__vtins__3KS4zHfAg9m3f4aZ': '%7B%22sid%22%3A%20%2254c8950e-1b89-5436-82d6-ab5d60a74f83%22%2C%20%22vd%22%3A%202%2C%20%22stt%22%3A%20367148%2C%20%22dr%22%3A%20367148%2C%20%22expires%22%3A%201737086952109%2C%20%22ct%22%3A%201737085152109%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    # 'Cookie': '__51vcke__3KS4zHfAg9m3f4aZ=912c6f77-6589-5d34-b303-3b7535abb3c2; __51vuft__3KS4zHfAg9m3f4aZ=1737081740534; __51uvsct__3KS4zHfAg9m3f4aZ=2; __vtins__3KS4zHfAg9m3f4aZ=%7B%22sid%22%3A%20%2254c8950e-1b89-5436-82d6-ab5d60a74f83%22%2C%20%22vd%22%3A%202%2C%20%22stt%22%3A%20367148%2C%20%22dr%22%3A%20367148%2C%20%22expires%22%3A%201737086952109%2C%20%22ct%22%3A%201737085152109%7D',
    'If-Modified-Since': 'Fri, 17 Jan 2025 02:49:41 GMT',
    'If-None-Match': '"1737082181"',
    'Referer': 'https://www.bimige.net/bimi/106457.html',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

# 读取文件内容
with open('menu.txt', 'r', encoding='utf-8') as file:
    content = file.read()

# 定义正则表达式模式
pattern = r'<dd><a href="/bimi/\d+/(\d+)\.html" style="">第(\d+)章\s+(.*?)</a></dd>'

# 查找所有匹配项
matches = re.findall(pattern, content)

# 生成数组对象
result = [{'path': match[0], 'name': f'第{match[1]}章 {match[2]}'} for match in matches]

# print(result)

# 确保目标目录存在，如果不存在则创建
target_directory = 'books'
if not os.path.exists(target_directory):
    os.makedirs(target_directory)

for item in result:
    path = item['path']
    name = item['name']
    url = 'https://www.bimige.net/bimi/106457/' + path + '.html'
    print(path + '------' + name + '   ---    ' + url)

    response = requests.get(url, cookies=cookies,
                            headers=headers).text

    # print('response-------- ' + response)

    try:
        soup = BeautifulSoup(response, "html.parser")

        target_div = soup.find("div", {"id": "content", "deep": "3"})

        # print('target_div_text ------ ', target_div.text)

        txt = target_div.text.replace("　　", "\n")

        file_path = os.path.join(target_directory, name + '.txt')
        # 打开一个文件用于写入，如果文件不存在则创建它
        with open(file_path, 'w', encoding='utf-8') as file:
            # 将target_div的文本内容写入到文件中
            file.write(txt)
    except:
        print('异常---' + name)
