# import requests
#
# r = requests.post("https://wyiosapi.qmpsee.com/Web/getCaDetail", {
#     "page": 1,
#     "num": 20,
#     "ca_uuid": "feef62bfdac45a94b9cd89aed5c235be"
# })
#
# print(r.status_code)
#
# r.encoding = 'utf-8'
#
# print(r.text)

# https://wx.qmpsee.com/articleDetail?id=feef62bfdac45a94b9cd89aed5c235be
# https://curlconverter.com/# 复制curl直接生成python代码

import requests
# pyexecjs2
import execjs

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://wx.qmpsee.com',
    'Platform': 'web',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'Source': 'see',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'page': '1',
    'num': '20',
    'ca_uuid': 'feef62bfdac45a94b9cd89aed5c235be',
}

response = requests.post('https://wyiosapi.qmpsee.com/Web/getCaDetail', headers=headers, data=data).json()

# 拿到响应的加密数据
encrypt_data = response['encrypt_data']

# print(encrypt_data)

# 打开js文件（逆向解析）
with open('./parse.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

# 执行js代码解析 call('主方法名称', 方法参数)
result = execjs.compile(js_code).call('Bc', encrypt_data)


print(result)