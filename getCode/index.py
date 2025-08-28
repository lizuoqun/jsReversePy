import json

import requests
import time
import os
import platform
import subprocess

mobileList = []


# 第一步：请求获取SVG验证码
def get_captcha_svg(mobile):
    url = "https://ums.gaoding.com/api/capcha"
    params = {
        'mobile': mobile,
        'mobile_area_code': '86'
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    try:
        response = requests.post(url, data=params, headers=headers, timeout=10)
        response.raise_for_status()  # 检查请求是否成功

        # 生成带时间戳的文件名
        timestamp = int(time.time())
        svg_filename = f"captcha_{timestamp}.svg"

        # 保存SVG文件
        with open(svg_filename, "w", encoding="utf-8") as f:
            f.write(response.text)

        print(f"第一步请求成功，SVG验证码已保存为: {svg_filename}")
        return svg_filename, response.text
    except Exception as e:
        print(f"第一步请求失败: {str(e)}")
        return None, None


# 将SVG转换为PNG图片并保存
def convert_svg_to_png(svg_filename, svg_content):
    try:
        # 创建HTML文件用于渲染SVG
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <title>验证码查看</title>
    <style>
        body {{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }}
        .captcha-container {{
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }}
        svg {{
            max-width: 300px;
            height: auto;
            border: 1px solid #ddd;
        }}
    </style>
</head>
<body>
    <div class="captcha-container">
        <h3>验证码图片</h3>
        {svg_content}
        <p>请查看上方的验证码并输入</p>
    </div>
</body>
</html>
        """

        # 生成HTML文件名
        html_filename = svg_filename.replace('.svg', '.html')

        # 保存HTML文件
        with open(html_filename, "w", encoding="utf-8") as f:
            f.write(html_content)

        print(f"验证码HTML文件已保存为: {html_filename}")

        # 自动打开文件
        open_file(html_filename)

        return html_filename
    except Exception as e:
        print(f"转换SVG到PNG时出错: {str(e)}")
        return None


# 自动打开文件（跨平台）
def open_file(filename):
    try:
        system = platform.system()
        if system == "Windows":
            os.startfile(filename)
        elif system == "Darwin":  # macOS
            subprocess.call(["open", filename])
        else:  # Linux
            subprocess.call(["xdg-open", filename])
        print(f"已自动打开文件: {filename}")
    except Exception as e:
        print(f"无法自动打开文件，请手动打开 {filename} 查看验证码")


# 第二步：手动输入验证码并提交
def submit_verification_manual(svg_filename, mobile):
    if not svg_filename:
        return

    try:
        # 提示用户手动输入验证码
        code = input("请输入验证码: ")
        code = code.strip()

        if not code:
            print("验证码不能为空")
            return

        # 提交验证码
        url = "https://ums.gaoding.com/v3/api/users/verify-code"
        data = {
            "type": "login",
            "mobile": mobile,
            "mobile_area_code": "86",
            "capcha": code,
            "portal": "gaoding"
        }

        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            "Content-Type": "application/json"
        }

        response = requests.post(url, json=data, headers=headers, timeout=10)
        response.raise_for_status()
        result = response.json()
        print("第二步请求结果:")
        print(result)
        return result
    except Exception as e:
        print(f"第二步请求失败: {str(e)}")
        return None


def get_telephone_info(telephone):
    # 接口URL
    url = "https://api4.wincheers.net/api/services/app/crmBuyer/GetTelePhone"

    # 请求参数
    data = {
        "Telephone": telephone
    }

    # 请求头
    headers = {
        "Content-Type": "application/json"
    }

    # 发送POST请求
    response = requests.post(url, json=data, headers=headers)

    # 打印输出响应结果
    print("响应结果:")
    print(json.dumps(response.json(), indent=2, ensure_ascii=False))

    return response.json()


# 主函数
def main():
    # 第一步：获取验证码SVG
    for mobile in mobileList:
        get_telephone_info(mobile)
        svg_filename, svg_content = get_captcha_svg(mobile)
        if not svg_filename:
            return

        # 转换并打开验证码图片
        convert_svg_to_png(svg_filename, svg_content)

        # 第二步：手动输入验证码并提交
        submit_verification_manual(svg_filename, mobile)


if __name__ == "__main__":
    main()
