import re

# 读取文件内容
with open('menu.txt', 'r', encoding='utf-8') as file:
    content = file.read()

# 定义正则表达式模式
pattern = r'<dd><a href="/bimi/\d+/(\d+)\.html" style="">第(\d+)章\s+(.*?)</a></dd>'

# 查找所有匹配项
matches = re.findall(pattern, content)

# 生成数组对象
result = [{'path': match[0], 'name': f'第{match[1]}章 {match[2]}'} for match in matches]

# print(result)


for item in result:
    path = item['path']
    name = item['name']
    print(path + '------' + name)
