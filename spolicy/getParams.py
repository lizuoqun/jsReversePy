import requests
import execjs

cookies = {
    'Hm_lvt_6146f11e5afab71309b3accbfc4a932e': '1734920218',
    'HMACCOUNT': '28A580B2C1918955',
    'JSESSIONID': 'E95AA44DFC218C9233A3858AF389B7D0',
    'Hm_lpvt_6146f11e5afab71309b3accbfc4a932e': '1734922086',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/octet-stream',
    # 'Cookie': 'Hm_lvt_6146f11e5afab71309b3accbfc4a932e=1734920218; HMACCOUNT=28A580B2C1918955; JSESSIONID=E95AA44DFC218C9233A3858AF389B7D0; Hm_lpvt_6146f11e5afab71309b3accbfc4a932e=1734922086',
    'Origin': 'https://www.spolicy.com',
    'Referer': 'https://www.spolicy.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

# 开始进行加密
params = {
    'policyType': '6',
    'province': '',
    'city': '',
    'downtown': '',
    'garden': '',
    'centralId': '',
    'sort': 0,
    'homePageFlag': 1,
    'pageNum': 1,
    'pageSize': 20
};

# 打开js文件（逆向解析）
with open('./encryParam.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

# 执行js代码解析 call('主方法名称', 方法参数)
result = execjs.compile(js_code).call('getParams', params)

data = bytes(result['data'])
# print('data---- ', data)
# data = '\n\x014\x12\x00\x1a\x00"\x00*\x002\x008\x00@\x01H\aP\x01'

response = requests.post('https://www.spolicy.com/info_api/policyType/showPolicyType', cookies=cookies, headers=headers,
                         data=data).json()

print(response['data'])
