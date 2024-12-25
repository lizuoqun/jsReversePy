import requests

cookies = {
    'js': '1',
    'HWWAFSESID': '2b2a2b5dee394e207e',
    'HWWAFSESTIME': '1735110870881',
    'sessionid': 'a0da998d-b6bd-4454-bece-19787f661f33',
    'js': '1',
    'Hm_lvt_d8276dcc8bdfef6bb9d5bc9e3bcfcaf4': '1735110871',
    'HMACCOUNT': '28A580B2C1918955',
    '_gid': 'GA1.2.1825796371.1735110872',
    '_ga_EE20FJFZZQ': 'GS1.1.1735110871.1.1.1735110975.0.0.0',
    '_ga': 'GA1.1.2106121943.1735110872',
    'Hm_lpvt_d8276dcc8bdfef6bb9d5bc9e3bcfcaf4': '1735110975',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # 'Cookie': 'js=1; HWWAFSESID=2b2a2b5dee394e207e; HWWAFSESTIME=1735110870881; sessionid=a0da998d-b6bd-4454-bece-19787f661f33; js=1; Hm_lvt_d8276dcc8bdfef6bb9d5bc9e3bcfcaf4=1735110871; HMACCOUNT=28A580B2C1918955; _gid=GA1.2.1825796371.1735110872; _ga_EE20FJFZZQ=GS1.1.1735110871.1.1.1735110975.0.0.0; _ga=GA1.1.2106121943.1735110872; Hm_lpvt_d8276dcc8bdfef6bb9d5bc9e3bcfcaf4=1735110975',
    'Origin': 'https://www.duitang.com',
    'Referer': 'https://www.duitang.com/login/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

'''
需要解决pwd是怎么加密的，这个js代码加密算法抠出来，应该是公钥加密+私钥解密
rid 是获取验证码接口的rid响应，这个在getCode.py里面已经得到了。
'''
data = {
    'login_name': '13212',
    'pswd': 'UnjlFbR+ljnnntupoaXaZxU29uVlFqn3zTWn33EWGXaPAN8gL9XeO+0J6R5wBYRrqgpILsv4y3N2tXw/ujTnOhN3RisoLi/qH6rfeQUd8a2bg8d36Ivf+bwGoMWw980lvN+qPmb7gYOTnwCJIdiPFrsnrvFSvmhYlNGXWuiSoHhAdy8C7Y4kQPzghSehxZ+fd4H01KofIqAx55RHWRJr3rYtdGt0MaW9lw0mRuOX6mmNzZXeVfJrSvCB8nzFimki1nez6UEAkeHrDXuFsnN3qThazMt6hVDUl2CGVAhIG47DaP4bhVDlTaQC++YED7x+UMi5Umu/bGz0d6aP+X+ejw==',
    '': '',
    'rid': '20241225151840e7983e40aa82e2262d',
    'remember': 'false',
}

response = requests.post('https://www.duitang.com/login/', cookies=cookies, headers=headers, data=data).text

print(response)
