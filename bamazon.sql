DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE store_products(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  item_price INT default 0,
  item_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO store_products
    (id,item_name,category,item_price,item_quantity)
VALUES
    (1001,'37 inch Samsung Smart tv','electronics',300,14),
    (1002,'Smart watch','electronics', 70, 32),
    (1003,'Iphone 6s','electronics', 270, 7),
    (1004,'Beats Headphones','electronics', 220, 17),
    (1005,'Smart watch Ascended','electronics', 170, 32),
    (1006,'40lb dumbells','fitness', 70, 32),
    (1007,'30lb dumbells','fitness', 70, 32),
    (1008,'25lb dumbells','fitness', 70, 32),
    (1009,'20lb dumbells','fitness', 70, 32),
    (1010,'10lb dumbells','fitness', 70, 32);