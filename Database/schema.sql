DROP DATABASE IF EXISTS ValueElectronicsChain;
CREATE DATABASE ValueElectronicsChain;

USE ValueElectronicsChain;

CREATE TABLE chain (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chain_name VARCHAR(255) NOT NULL,
    chain_description VARCHAR(255) NOT NULL,
    chain_established DATE NOT NULL,
    chain_headquarters VARCHAR(255) NOT NULL
);

CREATE TABLE store (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_name VARCHAR(255) NOT NULL,
    store_number INT NOT NULL,
    store_address VARCHAR(255) NOT NULL,
    store_open DATE NOT NULL,
    store_parent INT,
    INDEX (store_parent),
    CONSTRAINT fk_chain FOREIGN KEY (store_parent) REFERENCES chain(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(255) NOT NULL,
    hired_date DATE NOT NULL,
    contact_number VARCHAR(255) NOT NULL,
    sales_made INT,
    store_id INT,
    INDEX (store_id),
    CONSTRAINT fk_store FOREIGN KEY (store_id) REFERENCES store(id) ON DELETE SET NULL
);

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    item_description VARCHAR(255) NOT NULL,
    item_department VARCHAR(255) NOT NULL,
    item_price DECIMAL NOT NULL
);

CREATE TABLE sale (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sale_date DATE NOT NULL,
    sale_employee INT NOT NULL,
    INDEX (sale_employee),
    CONSTRAINT fk_employee_sale FOREIGN KEY (sale_employee) REFERENCES employee(id),
    sale_store INT NOT NULL,
    INDEX (sale_store),
    CONSTRAINT fk_store_store FOREIGN KEY (sale_store) REFERENCES store(id),
    sale_item INT NOT NULL,
    INDEX (sale_item),
    CONSTRAINT fk_item_sale_item FOREIGN KEY (sale_item) REFERENCES item(id),
    sale_item_two INT NOT NULL,
    INDEX (sale_item_two),
    CONSTRAINT fk_item_sale_item_two FOREIGN KEY (sale_item_two) REFERENCES item(id),
    sale_item_three INT NOT NULL,
    INDEX (sale_item_three),
    CONSTRAINT fk_item_sale_item_three FOREIGN KEY (sale_item_three) REFERENCES item(id),
    sale_item_four INT NOT NULL,
    INDEX (sale_item_four),
    CONSTRAINT fk_item_sale_item_four FOREIGN KEY (sale_item_four) REFERENCES item(id),
    sale_item_five INT NOT NULL,
    INDEX (sale_item_five),
    CONSTRAINT fk_item_sale_item_five FOREIGN KEY (sale_item_five) REFERENCES item(id),
    sale_total DECIMAL NOT NULL
);