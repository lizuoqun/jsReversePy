'''
爬取csdn博客内容py脚本
文章当中内容的图片还没能爬下来，后续实现
'''

import requests
from bs4 import BeautifulSoup

cookies = {
    'https_waf_cookie': 'b9aea6f4-d2b8-46df1126642ec4e4bac12b020e45a5fc6770',
    'uuid_tt_dd': '10_2487973300-1738719975361-613813',
    'dc_session_id': '10_1738719975361.721576',
    'waf_captcha_marker': '091fa2eb139d39047d64168a36185c01cfe9986f48cdac862d8fb9f429932c28',
    'c_pref': 'default',
    'c_ref': 'default',
    'fid': '20_34048128213-1738719976010-935509',
    'c_first_ref': 'default',
    'c_first_page': 'https%3A//blog.csdn.net/qq_44973159/article/details/144499560%3Fspm%3D1001.2014.3001.5501',
    'c_dsid': '11_1738719976010.975172',
    'c_segment': '5',
    'c_page_id': 'default',
    'dc_tos': 'sr6sx4',
    'log_Id_pv': '1',
    'creative_btn_mp': '1',
    'dc_sid': '1ecbcecc32299c684ded376bd6544e1f',
    'Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac': '1738719976',
    'Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac': '1738719976',
    'HMACCOUNT': 'B268F49F2AB7B09A',
    'hide_login': '1',
    'loginbox_strategy': '%7B%22taskId%22%3A349%2C%22abCheckTime%22%3A1738719976661%2C%22version%22%3A%22exp11%22%2C%22blog-threeH-dialog-exp11tipShowTimes%22%3A1%7D',
    'popPageViewTimes': '1',
    '__gads': 'ID=44430aac36a467e2:T=1738719977:RT=1738719977:S=ALNI_MY4gpBVrD2m8Hltl2su6KZue892wQ',
    '__gpi': 'UID=0000102a70a4ee77:T=1738719977:RT=1738719977:S=ALNI_MbwOBC5L4PCIP_gGpbCko26Gp0S8w',
    '__eoi': 'ID=287b4839c73e0487:T=1738719977:RT=1738719977:S=AA-AfjY7zEQtKedc_Djn1CMX7pQJ',
    'log_Id_view': '30',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    # 'Cookie': 'https_waf_cookie=b9aea6f4-d2b8-46df1126642ec4e4bac12b020e45a5fc6770; uuid_tt_dd=10_2487973300-1738719975361-613813; dc_session_id=10_1738719975361.721576; waf_captcha_marker=091fa2eb139d39047d64168a36185c01cfe9986f48cdac862d8fb9f429932c28; c_pref=default; c_ref=default; fid=20_34048128213-1738719976010-935509; c_first_ref=default; c_first_page=https%3A//blog.csdn.net/qq_44973159/article/details/144499560%3Fspm%3D1001.2014.3001.5501; c_dsid=11_1738719976010.975172; c_segment=5; c_page_id=default; dc_tos=sr6sx4; log_Id_pv=1; creative_btn_mp=1; dc_sid=1ecbcecc32299c684ded376bd6544e1f; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1738719976; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1738719976; HMACCOUNT=B268F49F2AB7B09A; hide_login=1; loginbox_strategy=%7B%22taskId%22%3A349%2C%22abCheckTime%22%3A1738719976661%2C%22version%22%3A%22exp11%22%2C%22blog-threeH-dialog-exp11tipShowTimes%22%3A1%7D; popPageViewTimes=1; __gads=ID=44430aac36a467e2:T=1738719977:RT=1738719977:S=ALNI_MY4gpBVrD2m8Hltl2su6KZue892wQ; __gpi=UID=0000102a70a4ee77:T=1738719977:RT=1738719977:S=ALNI_MbwOBC5L4PCIP_gGpbCko26Gp0S8w; __eoi=ID=287b4839c73e0487:T=1738719977:RT=1738719977:S=AA-AfjY7zEQtKedc_Djn1CMX7pQJ; log_Id_view=30',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'spm': '1001.2014.3001.5501',
}

name = '144499560'

response = requests.get(
    'https://blog.csdn.net/qq_44973159/article/details/' + name,
    # params=params,
    cookies=cookies,
    headers=headers,
).text

soup = BeautifulSoup(response, "html.parser")

# print(soup)

# 得到展示的div的内容
target_div = soup.find("div", {"class": "blog-content-box"})

title = soup.find("h1", {"id": "articleContentId"}).text

target_article = soup.find("article", {"class": "baidu_pl"})

# print(target_article)
# print(target_div)

with open(title + '.md', 'w', encoding='utf-8') as file:
    file.write(target_article.text.replace('\n\n\n', ''))
