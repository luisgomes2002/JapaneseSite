from pymongo import MongoClient
import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv
from bson import json_util

load_dotenv(find_dotenv())

app = Flask(__name__)
CORS(app)

db_connection_string = os.environ.get("DB_CONNECTION_STRING")
client = MongoClient(db_connection_string)
db = client["test"]

@app.route('/buscar', methods=['GET'])
def buscar_todos_usuarios():
    collection = db["users"]
    users = list(collection.find())
    response = app.response_class(
        response=json_util.dumps(users),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == '__main__':
    app.run()



# def connect_database():
# 	print("🔃 Wait connecting to the database")
# 	try:
# 		db_connection_string = os.environ.get("DB_CONNECTION_STRING")
# 		client = MongoClient(db_connection_string)
# 		print("✅ MongoDB Connected")
# 	except Exception as e:
# 		print(f"❌ An error occurred: {e}")