import requests

cookies = {
    'other_uid': 'Ths_iwencai_Xuangu_e48nl7xc8y7deqs27vlpp2zegxswkjnd',
    'ta_random_userid': 'gc796qitmo',
    'cid': '5210955258df17855789f9ff1879fd7b1734673804',
    'v': 'A2FiJBCTolVuSg4hNiorhI--cCZ-Dtdm_4J5F8MwXWjHKo9YC17l0I_SifxQ',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': 'other_uid=Ths_iwencai_Xuangu_e48nl7xc8y7deqs27vlpp2zegxswkjnd; ta_random_userid=gc796qitmo; cid=5210955258df17855789f9ff1879fd7b1734673804; v=A2FiJBCTolVuSg4hNiorhI--cCZ-Dtdm_4J5F8MwXWjHKo9YC17l0I_SifxQ',
    'Origin': 'http://iwencai.com',
    'Pragma': 'no-cache',
    'Referer': 'http://iwencai.com/unifiedwap/result?w=5g&querytype=stock&addSign=1734673868378',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'hexin-v': 'A2FiJBCTolVuSg4hNiorhI--cCZ-Dtdm_4J5F8MwXWjHKo9YC17l0I_SifxQ',
}

json_data = {
    'source': 'Ths_iwencai_Xuangu',
    'version': '2.0',
    'query_area': '',
    'block_list': '',
    'add_info': '{"urp":{"scene":1,"company":1,"business":1},"contentType":"json","searchInfo":true}',
    'question': '5g',
    'perpage': 50,
    'page': 1,
    'secondary_intent': 'stock',
    'log_info': '{"input_type":"typewrite"}',
    'rsh': 'Ths_iwencai_Xuangu_e48nl7xc8y7deqs27vlpp2zegxswkjnd',
}

response = requests.post(
    'http://iwencai.com/customized/chart/get-robot-data',
    cookies=cookies,
    headers=headers,
    json=json_data,
    verify=False,
).json()

print(response)


# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"source":"Ths_iwencai_Xuangu","version":"2.0","query_area":"","block_list":"","add_info":"{\\"urp\\":{\\"scene\\":1,\\"company\\":1,\\"business\\":1},\\"contentType\\":\\"json\\",\\"searchInfo\\":true}","question":"5g","perpage":50,"page":1,"secondary_intent":"stock","log_info":"{\\"input_type\\":\\"typewrite\\"}","rsh":"Ths_iwencai_Xuangu_e48nl7xc8y7deqs27vlpp2zegxswkjnd"}'
#response = requests.post(
#    'http://iwencai.com/customized/chart/get-robot-data',
#    cookies=cookies,
#    headers=headers,
#    data=data,
#    verify=False,
#)