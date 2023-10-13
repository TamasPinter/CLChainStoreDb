INSERT INTO chain (chain_name, chain_description, chain_established, chain_headquarters)
VALUES ('Value Electronics', 'All your top tier electronics at a low price', '2010-01-01', 'Albuquerque, New Mexico');

INSERT INTO store (store_name, store_number, store_address, store_open, store_parent)
VALUES ('Dallas Value Electronics', 1, '1234 Main Street, Dallas, TX 75201', '2010-01-01', 1),
       ('Houston Value Electronics', 2, '1234 River Road, Houston, TX 77001', '2010-03-03', 1),
       ('Austin Value Electronics', 3, '1134 N. Lamar Road, Austin, TX 78709', '2010-05-05', 1),
       ('San Antonio Value Electronics', 4, '670 S. Alamo Rd, San Antonio, TX 77602', '2012-12-12', 1);

INSERT INTO employee (employee_name, hired_date, contact_number, sales_made, store_id)
VALUES ('Oliver Queen', '2010-01-01', '212-555-1212', 2, 1),
       ('Barry Allen', '2010-01-01', '212-555-1234', 3, 1),
       ('Kaitlyn Snow', '2010-01-01', '212-555-4321', 0, 1),
       ('Cisco Ramon', '2010-01-01', '212-555-5678', 1, 1),
       ('John Diggle', '2010-03-03', '224-555-8642', 2, 2),
       ('Felicity Smoak', '2010-03-03', '224-555-1254', 3, 2),
       ('Roy Harper', '2010-03-03', '224-555-6743', 1, 2),
       ('Laurel Lance', '2010-03-03', '224-555-9765', 0, 2),
       ('Bruce Wayne', '2010-05-05', '555-555-5555', 3, 3),
       ('Dick Grayson', '2010-05-05', '555-555-1235', 2, 3),
       ('Selena Kyle', '2010-05-05', '555-212-5623', 1, 3),
       ('Viktor Freeze', '2010-05-05', '555-555-4598', 1, 3),
       ('Oswald Cobblepot', '2012-12-12', '321-234-8734', 1, 4),
       ('Poison Ivy', '2012-12-12', '525-876-1234', 0, 4),
       ('Harvey Dent', '2012-12-12', '555-555-1298', 1, 4),
       ('Lucius Fox', '2012-12-12', '555-212-4587', 2, 4);

INSERT INTO item (item_name, item_description, item_department, item_price)
VALUES ('No Sale', 'No item added', 'All', 00.00),
       ('Television', 'A 50 inch LED TV', 'Electronics', 499.99),
       ('Laptop', 'A 15 inch home laptop', 'Electronics', 799.99),
       ('Desktop Computer', 'A 17 inch home desktop computer', 'Electronics', 899.99),
       ('Tablet', 'A 10 inch tablet', 'Electronics', 299.99),
       ('Smart Watch', 'A standard smart watch', 'Electronics', 159.99),
       ('Cell Phone', 'A standard cell phone', 'Phones', 189.99),
       ('Cell Phone Case', 'A standard cell phone case', 'Phones', 15.99),
       ('Bluetooth Earbuds', 'A standard pair of bluetooth earbuds', 'Phones', 79.99),
       ('Headphones', 'A standard pair of headphones', 'Phones', 69.99),
       ('Phone Cleaning Kit', 'A phone cleaning kit', 'Phones', 29.99),
       ('Xbox X', 'Xbox series X', 'Gaming', 599.99),
       ('Playstation 5', 'Sony Playstation 5', 'Gaming', 559.99),
       ('Nintendo Switch', 'Portable Nintendo Switch OLED', 'Gaming', 299.99),
       ('Video Game', 'Any standard video game', 'Gaming', 79.99),
       ('Controller', 'A standard gaming console controller', 'Gaming', 59.99),
       ('Speaker System', 'A standard DOLBY speaker system', 'Audio', 499.99),
       ('Sound Bar', 'A standard sound bar', 'Audio', 199.99),
       ('Record Player', 'A standard record player', 'Audio', 149.99),
       ('CD', 'Any standard CD', 'Audio', 15.99),
       ('Vinyl Record', 'A standard vinyl record', 'Audio', 49.99);

INSERT INTO sale (sale_date, sale_employee, sale_store, sale_item, sale_item_two, sale_item_three, sale_item_four, sale_item_five, sale_total)
VALUES ('2010-01-01', 1, 1, 2, 15, 1, 1, 1, 579.98),
       ('2010-01-10', 1, 1, 4, 1, 1, 1, 1, 899.99),
       ('2010-01-08', 2, 1, 3, 5, 11, 1, 1, 1129.97),
       ('2010-01-12', 2, 1, 2, 1, 1, 1, 1, 499.99),
       ('2010-01-18', 2, 1, 5, 1, 1, 1, 1, 299.99),
       ('2010-01-20', 4, 1, 2, 12, 9, 4, 1, 2079.96),
       ('2010-03-03', 5, 2, 7, 1, 1, 1, 1, 189.99),
       ('2010-03-05', 5, 2, 9, 1, 1, 1, 1, 79.99),
       ('2010-03-04', 6, 2, 8, 1, 1, 1, 1, 15.99),
       ('2010-03-06', 6, 2, 10, 1, 1, 1, 1, 69.99),
       ('2010-03-18', 6, 2, 11, 1, 1, 1, 1, 29.99),
       ('2010-03-25', 7, 2, 8, 1, 1, 1, 1, 15.99),
       ('2010-05-05', 9, 3, 12, 1, 1, 1, 1, 599.99),
       ('2010-05-06', 9, 3, 13, 1, 1, 1, 1, 559.99),
       ('2010-05-07', 9, 3, 14, 1, 1, 1, 1, 299.99),
       ('2010-05-15', 10, 3, 15, 1, 1, 1, 1, 79.99),
       ('2010-05-21', 10, 3, 15, 1, 1, 1, 1, 59.99),
       ('2010-05-22', 11, 3, 13, 5, 7, 10, 17, 1619.95),
       ('2010-05-28', 12, 3, 15, 1, 1, 1, 1, 79.99),
       ('2012-12-12', 13, 4, 2, 1, 1, 1, 1, 499.99),
       ('2012-12-24', 15, 4, 17, 1, 1, 1, 1, 499.99),
       ('2012-12-28', 16, 4, 18, 1, 1, 1, 1, 199.99),
       ('2012-12-30', 16, 4, 19, 1, 1, 1, 1, 149.99);
       

       
