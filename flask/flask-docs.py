from flask import Flask
from flask_restful import Resource, Api
from flasgger import Swagger

app = Flask(__name__)
api = Api(app)

# 启用 Swagger UI
swagger = Swagger(app)

class HelloWorld(Resource):
    def get(self):
        """
        返回 Hello World 的接口
        ---
        responses:
          200:
            description: 成功返回字符串
        """
        return {'hello': 'world'}

class Users(Resource):
    def get(self):
        """
        获取用户列表
        ---
        responses:
          200:
            description: 用户列表
            schema:
              type: array
              items:
                type: string
        """
        return ['Alice', 'Bob']

api.add_resource(HelloWorld, '/')
api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(debug=True)