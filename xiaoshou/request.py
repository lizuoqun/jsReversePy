from bs4 import BeautifulSoup
import requests

cookies = {
    '__51vcke__3KS4zHfAg9m3f4aZ': '912c6f77-6589-5d34-b303-3b7535abb3c2',
    '__51vuft__3KS4zHfAg9m3f4aZ': '1737081740534',
    '__51uvsct__3KS4zHfAg9m3f4aZ': '3',
    '__vtins__3KS4zHfAg9m3f4aZ': '%7B%22sid%22%3A%20%227ab6a61f-0bb2-5291-8313-49235ff253ee%22%2C%20%22vd%22%3A%204%2C%20%22stt%22%3A%201371499%2C%20%22dr%22%3A%2015203%2C%20%22expires%22%3A%201737096027589%2C%20%22ct%22%3A%201737094227589%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    # 'Cookie': '__51vcke__3KS4zHfAg9m3f4aZ=912c6f77-6589-5d34-b303-3b7535abb3c2; __51vuft__3KS4zHfAg9m3f4aZ=1737081740534; __51uvsct__3KS4zHfAg9m3f4aZ=3; __vtins__3KS4zHfAg9m3f4aZ=%7B%22sid%22%3A%20%227ab6a61f-0bb2-5291-8313-49235ff253ee%22%2C%20%22vd%22%3A%204%2C%20%22stt%22%3A%201371499%2C%20%22dr%22%3A%2015203%2C%20%22expires%22%3A%201737096027589%2C%20%22ct%22%3A%201737094227589%7D',
    'If-Modified-Since': 'Fri, 17 Jan 2025 04:36:04 GMT',
    'If-None-Match': '"1737088564"',
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

page = '402327165'

response = requests.get('https://www.bimige.net/bimi/106457/' + page + '.html', cookies=cookies, headers=headers).text

soup = BeautifulSoup(response, "html.parser")

target_div = soup.find("div", {"id": "content", "deep": "3"})

txt = target_div.text.replace("　　", "\n")

# 打开一个文件用于写入，如果文件不存在则创建它
with open('./books' + page + '.txt', 'w', encoding='utf-8') as file:
    # 将target_div的文本内容写入到文件中
    file.write(txt)
