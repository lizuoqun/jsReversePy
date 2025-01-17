import requests
from bs4 import BeautifulSoup
cookies = {
    '__51uvsct__3KS4zHfAg9m3f4aZ': '1',
    '__51vcke__3KS4zHfAg9m3f4aZ': '912c6f77-6589-5d34-b303-3b7535abb3c2',
    '__51vuft__3KS4zHfAg9m3f4aZ': '1737081740534',
    '__vtins__3KS4zHfAg9m3f4aZ': '%7B%22sid%22%3A%20%22e93f7919-1820-5cad-8d08-b7262153b574%22%2C%20%22vd%22%3A%2010%2C%20%22stt%22%3A%20670424%2C%20%22dr%22%3A%2025804%2C%20%22expires%22%3A%201737084210956%2C%20%22ct%22%3A%201737082410956%7D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    # 'Cookie': '__51uvsct__3KS4zHfAg9m3f4aZ=1; __51vcke__3KS4zHfAg9m3f4aZ=912c6f77-6589-5d34-b303-3b7535abb3c2; __51vuft__3KS4zHfAg9m3f4aZ=1737081740534; __vtins__3KS4zHfAg9m3f4aZ=%7B%22sid%22%3A%20%22e93f7919-1820-5cad-8d08-b7262153b574%22%2C%20%22vd%22%3A%2010%2C%20%22stt%22%3A%20670424%2C%20%22dr%22%3A%2025804%2C%20%22expires%22%3A%201737084210956%2C%20%22ct%22%3A%201737082410956%7D',
    'If-Modified-Since': 'Fri, 17 Jan 2025 01:44:55 GMT',
    'If-None-Match': '"1737078295"',
    'Referer': 'https://www.bimige.net/bimi/106457.html',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.get('https://www.bimige.net/bimi/106457.html', cookies=cookies, headers=headers).text

soup = BeautifulSoup(response, "html.parser")

target_div = soup.find("div", {"id": "list"})

txt = target_div

print(txt)
