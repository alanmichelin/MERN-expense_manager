CREATE DATABASE fullstacktest;

USE fullstacktest;

CREATE TABLE operations(
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(200) NOT NULL,
    amount INT NOT NULL,
    OperationType ENUM('in','out') NOT NULL,
    date DATE NOT NULL
);