INSERT INTO chain (chain_name, chain_description, chain_established, chain_headquarters)
VALUES ('Value Electronics', 'All your top tier electronics at a low price', '01/01/2010', 'Albuquerque, New Mexico');

INSERT INTO store (store_name, store_number, store_address, store_open, store_parent)
VALUES ('Dallas Value Electronics', '1', '1234 Main Street, Dallas, TX 75201', '01/01/2010', '1'),
       ('Houston Value Electronics', '2', '1234 River Road, Houston, TX 77001', '03/03/2010', '1'),
       ('Austin Value Electronics', '3', '1134 N. Lamar Road, Austin, TX 78709', '05/05/2010', '1'),
       ('San Antonio Value Electronics', '4', '670 S. Alamo Rd, San Antonio, TX 77602', '12/12/2012', '1');

INSERT INTO employee (employee_name, hired_date, contact_number, sales_made, store_id)
VALUES ('Oliver Queen', '01/01/2010', '212-555-1212', '2', '1'),
       ('Barry Allen', '01/01/2010', '212-555-1234', '3', '1'),
       ('Kaitlyn Snow', '01/01/2010', '212-555-4321', '0', '1'),
       ('Cisco Ramon', '01/01/2010', '212-555-5678', '1', '1'),
       ('John Diggle', '03/03/2010', '224-555-8642', '2', '2'),
       ('Felicity Smoak', '03/03/2010', '224-555-1254', '3', '2'),
       ('Roy Harper', '03/03/2010', '224-555-6743', '1', '2'),
       ('Laurel Lance', '03/03/2010', '224-555-9765', '0', '2'),
       ('Bruce Wayne', '05/05/2010', '555-555-5555', '3', '3'),
       ('Dick Grayson', '05/05/2010', '555-555-1235', '2', '3'),
       ('Selena Kyle', '05/05/2010', '555-212-5623', '1', '3'),
       ('Viktor Freeze', '05/05/2010', '555-555-4598', '1', '3'),
       ('Oswald Cobblepot', '12/12/2012', '321-234-8734', '1', '4'),
       ('Poison Ivy', '12/12/2012', '525-876-1234', '0', '4'),
       ('Harvey Dent', '12/12/2012', '555-555-1298', '1', '4'),
       ('Lucius Fox', '12/12/2012', '555-212-4587', '2', '4');