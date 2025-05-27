import requests

cookies = {
    'Hm_lvt_1c61e24eff639e825f5a3d7f957635c6': '1748223702',
    'HMACCOUNT': 'AFF53ED5CEEA1F0F',
    'pushToken': '1aeafe0189e943c8841745f22786c0c5',
    'Hm_lpvt_1c61e24eff639e825f5a3d7f957635c6': '1748226312',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.pushplus.plus',
    'Pragma': 'no-cache',
    'Referer': 'https://www.pushplus.plus/liaison.html',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'pushToken': '1aeafe0189e943c8841745f22786c0c5',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'Hm_lvt_1c61e24eff639e825f5a3d7f957635c6=1748223702; HMACCOUNT=AFF53ED5CEEA1F0F; pushToken=1aeafe0189e943c8841745f22786c0c5; Hm_lpvt_1c61e24eff639e825f5a3d7f957635c6=1748226312',
}

json_data = {
    'to': '8ad9c3ec91d54d46bf59073956406d8e',
    'token': '6734f83cf32242fcb6579bbbf40992fc',
    'title': '测试',
    'content': '1234',
    'template': 'html',
    'channel': 'wechat',
    'pre': '',
}

response = requests.post('https://www.pushplus.plus/api/send', cookies=cookies, headers=headers, json=json_data)

print(response)
