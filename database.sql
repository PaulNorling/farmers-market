
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
	"id" SERIAL,
	"bookmark_user_id" integer NOT NULL REFERENCES "user",
	"bookmark_listings_id" integer NOT NULL REFERENCES listings,
	PRIMARY KEY ("bookmark_listings_id","bookmark_user_id")
	);



CREATE TABLE "listings" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"name" VARCHAR (30),
	"item" VARCHAR (30),
	"item_price" INT,
	"description" VARCHAR (1000),
	"address" VARCHAR (200),
	"zip" VARCHAR (5) NOT NULL,
	"phone_number" VARCHAR (30),
	"email" VARCHAR (100),
	"image" VARCHAR (1000)
	);
	

TRUNCATE TABLE 	"user";

TRUNCATE TABLE 	"listings";

TRUNCATE TABLE 	"bookmarks";



DROP TABLE "user";

DROP TABLE "listings";

DROP TABLE "bookmarks";

SELECT * 
FROM "listings";

INSERT INTO "listings" (user_id, name, item, description, item_price, address, phone_number, email, image)
    VALUES ('1', 'paul', 'radish', 'by the pound', '1', '476 208th ave', '6128029320', 'paulnorling87@gamil.com', 'https://t3.ftcdn.net/jpg/02/27/36/72/360_F_227367297_Cu4NtNiMnKJcOSOr81hJBj2WYZmsh19k.jpg');
    
SELECT * 
FROM "listings"
WHERE "user_id"='1';


UPDATE listings
SET item = 'cake'
                
WHERE id = 14;

SELECT *
  FROM "listings"
  FULL OUTER JOIN "bookmarks"
  ON "listings"."id" = "bookmarks"."bookmark_listings_id"
  WHERE "listings"."id" = 5;
  
SELECT * IF (
  FROM "listings"
    WHERE "zip" = '54025';

  
DELETE FROM "bookmarks" WHERE "bookmark_user_id" = 1 AND "bookmark_listings_id" = 10;

SELECT * 
  FROM listings
  
  
  WHERE listings."id"=1;
  
DELETE 
FROM "listings"
FROM "bookmarks"
WHERE "listings"."id" = '2' AND "bookmarks"."bookmark_listings_id" = '2';

SELECT *
FROM "listings"
JOIN "bookmarks"
ON "listings"."id" = "bookmarks"."bookmark_listings_id"
WHERE "listings"."id"='2';
