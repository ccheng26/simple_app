DROP TABLE IF EXISTS users;
CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	username VARCHAR(50) UNIQUE,
	email VARCHAR(50) UNIQUE,
	user_password VARCHAR(255)
);