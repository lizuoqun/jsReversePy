import requests
from urllib.parse import urlencode
import urllib3
import pandas as pd

# 禁用 InsecureRequestWarning 警告
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# API 地址
url = "https://appapi.lvcchong.com/appBaseApi/user/chargeRecordList"

# query 参数
params = {
    "channelMessage": "LVCC-WP-PH_2.0.0_Tencent-G9"
}

# 请求体（form表单数据）
form_data = {
    "page": "1",
    "limit": "100",
    "entranceStatuses": "0",
    "deviceFamilyList": "",
    "statusList": "",
    "dateRange": "",
    "chargeTypeTag": "0"
}

# 请求头（完全模拟小程序）
headers = {
    "Host": "appapi.lvcchong.com",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) UnifiedPCWindowsWechat(0xf2541015) XWEB/16389",
    "xweb_xhr": "1",
    "Content-Type": "application/x-www-form-urlencoded",
    "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJmYmE3ZjNkZGQ3YTRlMmI4NjJjZDIyMGY3NWZhMWI5In0.eyJqdGkiOiJ1dG5MNW1rU2Y0SW01bElMekZaZkVnIiwiaWF0IjoxNzU2MzY3NzU0LCJleHAiOjE3NTYzNjc3ODQsIm5iZiI6MTc1NjM2NzY5NCwic3ViIjoiMiIsImF1ZCI6IklfRE9OT1RfQ0FSRSIsInVzZXJJZCI6IjU1NjY3MzI5In0.JUEEcUflrBFiYh7BPK8lNAVt9DWEioqCoc8dckfFDLclh3I_fosUDY8hMvLBz5YekaXrYEN6JrMnL0MFiKJWStKKXBD66HKliBnG2_TD9_6zwhU5y_nkU8BnF-Dizp1TrF4oR_eIAEmEVPNANlED9npqWzUsQmJyjw1cNO-SqmWNWuWUqTom9HfM1fG6e0x5KcDUZ9Np7xqa8ovx4Tm981ehM-XqRAPYL6nhUUlhMwroWZ_x6DsuURlmtqY8r2_NyHJSsEpxhbhRSM4LVTSqhxHrf514buLjHxiRZh0RweQw-gWecwQ0KSZrKcQsopAHB_BMeJ7THcpwwzv_Il5SWA",
    "Accept": "*/*",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    # "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9"
}

# 发起 POST 请求
try:
    response = requests.post(
        url,
        params=params,
        data=form_data,
        headers=headers,
        timeout=10,
        verify=False  # 禁用 SSL 验证
    )

    # 打印结果
    print(f"✅ 请求成功！状态码: {response.status_code}")
    print(response.json()['data']['list'])

    data_list = response.json()['data']['list']
    print(f"获取到 {len(data_list)} 条记录")
    df = pd.DataFrame(data_list)

    # 写入 Excel 文件
    excel_filename = "charge_records.xlsx"
    df.to_excel(excel_filename, index=False, engine='openpyxl')

    print(f"✅ 数据已成功写入到 {excel_filename}")

except requests.exceptions.RequestException as e:
    print(f"❌ 请求失败: {e}")
