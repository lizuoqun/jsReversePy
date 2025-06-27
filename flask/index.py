from flask import Flask, render_template, jsonify

# 创建 Flask 应用实例
app = Flask(__name__)


@app.route('/')
def hello_html():
    return '<h1 style="color: blue;">Hello, World in Blue!</h1>'


@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"data": [1, 2, 3, 4]})


# 启动应用
if __name__ == '__main__':
    app.run(debug=True)
