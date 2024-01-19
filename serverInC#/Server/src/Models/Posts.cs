using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

public class Posts
{
	[BsonId]
	[BsonRepresentation(BsonType.ObjectId)]
	public string Id { get; set; }

	[BsonRepresentation(BsonType.ObjectId)]
	[BsonRequired]
	public string UserId { get; set; }

	[BsonRequired]
	public string Banner { get; set; }

	[BsonRequired]
	public string Title { get; set; }

	[BsonRequired]
	public string Text { get; set; }

	[BsonRequired]
	public List<string> Likes { get; set; }

	[BsonRequired]
	public List<Comment> Comments { get; set; }

	[BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
	[BsonDefaultValue(typeof(DateTime))]
	public DateTime CreatedAt { get; set; }
}