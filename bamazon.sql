DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products
    (item_id,product_name,department_name,price,stock_quantity)
VALUES
    (1001,'37 inch Samsung Smart tv','electronics',300,14),
    (1002,'Smart watch','electronics', 70, 42),
    (1003,'Iphone 6s','electronics', 270, 7),
    (1004,'Beats Headphones','electronics', 220, 17),
    (1005,'Smart watch Ascended','electronics', 170, 24),
    (1006,'40lb dumbells','fitness', 40, 32),
    (1007,'30lb dumbells','fitness', 30, 32),
    (1008,'25lb dumbells','fitness', 25, 32),
    (1009,'20lb dumbells','fitness', 20, 32),
    (1010,'10lb dumbells','fitness', 10, 32);