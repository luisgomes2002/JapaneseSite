from flask import Flask
from flask_cors import CORS
from bson import json_util
from database.database_connection import connect_database

app = Flask(__name__)
CORS(app)

db = connect_database()

@app.route('/buscar', methods=['GET'])
def buscar_todos_usuarios():
	try:
		collection = db["users"]
		users = list(collection.find())
		response = app.response_class(
				response=json_util.dumps(users),
				status=200,
				mimetype='application/json'
		)
		return response
	except Exception as e: 
		return f"❌ Unable to fetch users. Database connection not established. Error: {e}"