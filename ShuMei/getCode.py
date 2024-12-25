import requests
import re

session = requests.Session()

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Referer': 'https://www.duitang.com/',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'sdkver': '1.1.3',
    'organization': 'ltA7kUoBFCTVmRodXoKD',
    'appId': 'default',
    'data': '{}',
    'rversion': '1.0.3',
    'channel': 'DEFAULT',
    'callback': 'sm_1735111124340',
    'model': 'slide',
    'lang': 'zh-cn',
}

response = session.get('https://captcha1.fengkongcloud.cn/ca/v1/register', params=params, headers=headers).text

rid = re.findall('"rid":"(.*?)"', response)[0]

print(rid)
