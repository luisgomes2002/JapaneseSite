using Server.Database;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Server.Services;

public class MongoDBService
{
	private readonly IMongoCollection<Posts> _posts;
	private readonly IMongoCollection<User> _user;

	public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
	{
		MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
		IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
		_posts = database.GetCollection<Posts>(mongoDBSettings.Value.CollectionName);
		_user = database.GetCollection<User>(mongoDBSettings.Value.CollectionName);
	}
}