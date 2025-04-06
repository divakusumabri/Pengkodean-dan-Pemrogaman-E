CREATE DATABASE inventory_db;
USE inventory_db;

CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);
