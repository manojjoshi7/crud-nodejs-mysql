--create database-----
CREATE database crudnodejsmysql;
USE crudnodejsmysql;
----create table------
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(150) NOT NULL,
    phone VARCHAR(15)
);
----show all tables
SHOW TABLES;
----to discribe table
discribe customer;