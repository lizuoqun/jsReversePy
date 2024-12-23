import requests
import execjs

cookies = {
    'cna': 'zQXwH7S/qQsCAQ7UOnPtvQns',
    'xlly_s': '1',
    'cookie2': '13676d1a0b0b3883cf7c25d27ed6bd31',
    '_samesite_flag_': 'true',
    't': '643f62f97e19365580b991a331bc5341',
    '_tb_token_': '3530b93eb333a',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': 'd88e843a08c297124756a8de3f7bfa2f_1734967977678',
    '_m_h5_tk_enc': 'cacd5e7513cbbff6e1ef2bbf9b87c484',
    'isg': 'BPHxrKheMukkWp79WYG4xi2sAH2L3mVQaU6xANMG4LjX-hFMGyyfIKBBHo6cev2I',
    'tfstk': 'glaKCl9WVOX31D3c-wsiEXsw9ZCGizFUxJPXrYDHVReTGSJnVy03e3e3a8m5L248B7wATbXUrBranST3-Muky2urPtXcoZV3T4u5nv-8EBusZjLCrUiWC2lk07VpHZVUTCOpFsq1oLQ8fw2SF8iIf5GqCXTWP8gs1jM6RbTINd1taAgWP0GICVGmNHgSP8N16jDsOAePvAAI6UElstp5OTr2PUat9csgOAN_9_cEvgVtQU_YRXpqhWM9PUM3VVv36WXpu50Uo-h0KNTLH7N4VcUJCtHzW5aQV5JdFfr7KVMnlMOt-yPQc0afU3wxJ8nbRcdWlWPIQVh_l_xqIPH3Fyn1iEno5rmjRljNK00KM8aUpQL7h5V08czRHdMzxjuswz5X2Yn54_U0kIjynxhkA1C943oI_klnk8eDWOct6xfCO3-rVfltn1C943oI_fHc9JKy40GN.',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'cna=zQXwH7S/qQsCAQ7UOnPtvQns; xlly_s=1; cookie2=13676d1a0b0b3883cf7c25d27ed6bd31; _samesite_flag_=true; t=643f62f97e19365580b991a331bc5341; _tb_token_=3530b93eb333a; mtop_partitioned_detect=1; _m_h5_tk=d88e843a08c297124756a8de3f7bfa2f_1734967977678; _m_h5_tk_enc=cacd5e7513cbbff6e1ef2bbf9b87c484; isg=BPHxrKheMukkWp79WYG4xi2sAH2L3mVQaU6xANMG4LjX-hFMGyyfIKBBHo6cev2I; tfstk=glaKCl9WVOX31D3c-wsiEXsw9ZCGizFUxJPXrYDHVReTGSJnVy03e3e3a8m5L248B7wATbXUrBranST3-Muky2urPtXcoZV3T4u5nv-8EBusZjLCrUiWC2lk07VpHZVUTCOpFsq1oLQ8fw2SF8iIf5GqCXTWP8gs1jM6RbTINd1taAgWP0GICVGmNHgSP8N16jDsOAePvAAI6UElstp5OTr2PUat9csgOAN_9_cEvgVtQU_YRXpqhWM9PUM3VVv36WXpu50Uo-h0KNTLH7N4VcUJCtHzW5aQV5JdFfr7KVMnlMOt-yPQc0afU3wxJ8nbRcdWlWPIQVh_l_xqIPH3Fyn1iEno5rmjRljNK00KM8aUpQL7h5V08czRHdMzxjuswz5X2Yn54_U0kIjynxhkA1C943oI_klnk8eDWOct6xfCO3-rVfltn1C943oI_fHc9JKy40GN.',
    'origin': 'https://www.goofish.com',
    'priority': 'u=1, i',
    'referer': 'https://www.goofish.com/',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}

params = {
    'jsv': '2.7.2',
    'appKey': '34839810',
    't': '1734959629969',
    'sign': 'b2efedbeb82da5743d319aaabdd262a1',
    'v': '1.0',
    'type': 'originaljson',
    'accountSite': 'xianyu',
    'dataType': 'json',
    'timeout': '20000',
    'api': 'mtop.taobao.idlemtopsearch.pc.search',
    'sessionOption': 'AutoLoginOnly',
    'spm_cnt': 'a21ybx.search.0.0',
    'spm_pre': 'a21ybx.home.searchInput.0',
}

data = {
    'data': '{"pageNumber":1,"keyword":"ipad","fromFilter":false,"rowsPerPage":30,"sortValue":"","sortField":"","customDistance":"","gps":"","propValueStr":{},"customGps":"","searchReqFromPage":"pcSearch"}',
}

# 打开js文件（逆向解析）
with open('./getSign.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

result = execjs.compile(js_code).call('getSign', cookies['_m_h5_tk'], data['data'], params['appKey'])

print(result)
# 在js当中进行一遍加密之后，重新覆盖掉sign和t
params['sign'] = result['sign']
params['t'] = result['time']

print(params)

response = requests.post(
    'https://h5api.m.goofish.com/h5/mtop.taobao.idlemtopsearch.pc.search/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
).json()

print(response)
