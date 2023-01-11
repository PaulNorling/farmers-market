
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "zip" VARCHAR (5) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "zip" VARCHAR (5) NOT NULL
);

CREATE TABLE "bookmarks" (
	"id" SERIAL PRIMARY KEY,
	"bookmark_user_id" integer NOT NULL REFERENCES "user"(id),
	"bookmark_listings_id" integer NOT NULL REFERENCES "listings"(id) ON DELETE CASCADE
	);

CREATE TABLE "listings" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"name" VARCHAR (30),
	"item" VARCHAR (100),
	"item_price" INT,
	"description" VARCHAR (1000),
	"address" VARCHAR (200),
	"zip" VARCHAR (5) NOT NULL,
	"phone_number" VARCHAR (30),
	"email" VARCHAR (100),
	"image" VARCHAR (1000)
	);
	
