from pymongo import MongoClient
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

def connect_database():
	print("🔃 Wait connecting to the database")
	try:
		db_connection_string = os.environ.get("DB_CONNECTION_STRING")
		client = MongoClient(db_connection_string)
		print("✅ MongoDB Connected")
		db = client["test"]
		print(f'✅ Server is running')
		return db
	except Exception as e:
		print(f"❌ An error occurred: {e}")