CREATE DATABASE sportsdb;

\c sportsdb;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(100) NOT NULL
);
