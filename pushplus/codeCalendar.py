# 掘金技术日签
# @Time: 2025/05/27 17:46
# coding:utf-8

import requests

cookies = {
    'sid_guard': '8f1438406d0b3b7fb6762b6449f44395%7C1718704707%7C31536000%7CWed%2C+18-Jun-2025+09%3A58%3A27+GMT',
    'uid_tt': '066af62aedf920043ff139e93a0f97a3',
    'uid_tt_ss': '066af62aedf920043ff139e93a0f97a3',
    'sid_tt': '8f1438406d0b3b7fb6762b6449f44395',
    'sessionid': '8f1438406d0b3b7fb6762b6449f44395',
    'sessionid_ss': '8f1438406d0b3b7fb6762b6449f44395',
    'sid_ucp_v1': '1.0.0-KGQ1NGMwODUxMGUzOTBlM2RkYzAwZGIwYjE3YzBkMjk1ZmYwYjdiNzUKFwjorvCZzo2wBRDDtMWzBhiwFDgHQPQHGgJsZiIgOGYxNDM4NDA2ZDBiM2I3ZmI2NzYyYjY0NDlmNDQzOTU',
    'ssid_ucp_v1': '1.0.0-KGQ1NGMwODUxMGUzOTBlM2RkYzAwZGIwYjE3YzBkMjk1ZmYwYjdiNzUKFwjorvCZzo2wBRDDtMWzBhiwFDgHQPQHGgJsZiIgOGYxNDM4NDA2ZDBiM2I3ZmI2NzYyYjY0NDlmNDQzOTU',
    'store-region': 'cn-js',
    'store-region-src': 'uid',
    '__tea_cookie_tokens_2608': '%257B%2522user_unique_id%2522%253A%25227245167935411865091%2522%252C%2522web_id%2522%253A%25227245167935411865091%2522%252C%2522timestamp%2522%253A1721382230154%257D',
    '_ga': 'GA1.2.896552987.1739849812',
    '_ga_S695FMNGPJ': 'GS1.2.1739849812.1.0.1739849812.60.0.0',
    '_tea_utm_cache_2608': '{%22utm_source%22:%22juejinxiaoce%22%2C%22utm_medium%22:%22wenzhang%22%2C%22utm_campaign%22:%22smzdm_xctj%22}',
    '_tea_utm_cache_2018': '{%22utm_source%22:%22juejinxiaoce%22%2C%22utm_medium%22:%22wenzhang%22%2C%22utm_campaign%22:%22smzdm_xctj%22}',
    'csrf_session_id': 'df6346c57738f8ebfb7c6aac5b0e657d',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://juejin.cn',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://juejin.cn/',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    # 'cookie': 'sid_guard=8f1438406d0b3b7fb6762b6449f44395%7C1718704707%7C31536000%7CWed%2C+18-Jun-2025+09%3A58%3A27+GMT; uid_tt=066af62aedf920043ff139e93a0f97a3; uid_tt_ss=066af62aedf920043ff139e93a0f97a3; sid_tt=8f1438406d0b3b7fb6762b6449f44395; sessionid=8f1438406d0b3b7fb6762b6449f44395; sessionid_ss=8f1438406d0b3b7fb6762b6449f44395; sid_ucp_v1=1.0.0-KGQ1NGMwODUxMGUzOTBlM2RkYzAwZGIwYjE3YzBkMjk1ZmYwYjdiNzUKFwjorvCZzo2wBRDDtMWzBhiwFDgHQPQHGgJsZiIgOGYxNDM4NDA2ZDBiM2I3ZmI2NzYyYjY0NDlmNDQzOTU; ssid_ucp_v1=1.0.0-KGQ1NGMwODUxMGUzOTBlM2RkYzAwZGIwYjE3YzBkMjk1ZmYwYjdiNzUKFwjorvCZzo2wBRDDtMWzBhiwFDgHQPQHGgJsZiIgOGYxNDM4NDA2ZDBiM2I3ZmI2NzYyYjY0NDlmNDQzOTU; store-region=cn-js; store-region-src=uid; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227245167935411865091%2522%252C%2522web_id%2522%253A%25227245167935411865091%2522%252C%2522timestamp%2522%253A1721382230154%257D; _ga=GA1.2.896552987.1739849812; _ga_S695FMNGPJ=GS1.2.1739849812.1.0.1739849812.60.0.0; _tea_utm_cache_2608={%22utm_source%22:%22juejinxiaoce%22%2C%22utm_medium%22:%22wenzhang%22%2C%22utm_campaign%22:%22smzdm_xctj%22}; _tea_utm_cache_2018={%22utm_source%22:%22juejinxiaoce%22%2C%22utm_medium%22:%22wenzhang%22%2C%22utm_campaign%22:%22smzdm_xctj%22}; csrf_session_id=df6346c57738f8ebfb7c6aac5b0e657d',
}

params = {
    'aid': '2608',
    'uuid': '7245167935411865091',
    'spider': '0',
}

response = requests.get('https://api.juejin.cn/growth_api/v1/get_coder_calendar', params=params, cookies=cookies,
                        headers=headers).json()

data = response['data']

print(data['aphorism'])
