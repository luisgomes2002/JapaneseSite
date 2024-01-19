using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using BCrypt.Net;

public class User
{
	[BsonId]
	[BsonRepresentation(BsonType.ObjectId)]
	public string Id { get; set; }

	[BsonElement("name")]
	public string Name { get; set; }

	[BsonElement("username")]
	[BsonUnique]
	public string Username { get; set; }

	[BsonElement("email")]
	[BsonUnique]
	public string Email { get; set; }

	[BsonElement("password")]
	[BsonRequired]
	[BsonIgnore]
	public string Password { get; set; }

	[BsonElement("avatar")]
	public string Avatar { get; set; }

	[BsonElement("background")]
	public string Background { get; set; }

	[BsonElement("fullPermission")]
	public bool FullPermission { get; set; } = false;

	[BsonElement("points")]
	public int Points { get; set; } = 0;

	[BsonElement("follows")]
	public List<string> Follows { get; set; }

	[BsonElement("followed")]
	public List<string> Followed { get; set; }

	[BsonElement("createdAt")]
	[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
	public DateTime CreatedAt { get; set; } = DateTime.Now;

	[BsonElement("about")]
	public string About { get; set; }

	[BsonElement("backgroundColor")]
	public string BackgroundColor { get; set; } = "#121214";

	[BsonElement("jlptLevel")]
	public string JlptLevel { get; set; }

	// Hash the password before saving to the database
	public void HashPassword()
	{
		Password = BCrypt.Net.BCrypt.HashPassword(Password);
	}

	// Verify password
	public bool VerifyPassword(string candidatePassword)
	{
		return BCrypt.Net.BCrypt.Verify(candidatePassword, Password);
	}
}
