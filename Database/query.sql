-- view basic chain info--
Select id, chain_name, chain_description, chain_established, chain_headquarters from chain;

-- view chain info with total number of stores and total amount of sales --
Select chain.id, chain_name, chain_description, chain_established, chain_headquarters, count(store.id) as total_stores, sum(sale.sale_total) as total_sales from chain
INNER JOIN store ON chain.id = store.chain_id
INNER JOIN sale ON chain.id = sale.sale_chain;

-- view store info with number of employees and total amount of sales --
Select store.id, store_name, store_number, store_address, store_open, count(employee.id) as total_employees, sum(sale.sale_total) as total_sales from store
INNER JOIN employee ON store.id = employee.store_id
INNER JOIN sale ON store.id = sale.sale_store;

-- view all employees with their store name and total sales --
Select employee.id, employee_name, hired_date, contact_number, sales_made, store_name, sum(sale.sale_total) as total_sales from employee
INNER JOIN store ON employee.store_id = store.id
INNER JOIN sale ON employee.id = sale.sale_employee;

-- view all items --
Select id, item_name, item_description, item_price from item;

-- view all sales --
Select id, sale_date, sale_employee, sale_store, sale_item, sale_item_two, sale_item_three, sale_item_four, sale_item_five, sale_total from sale
INNER JOIN employee ON sale.sale_employee = employee.id
INNER JOIN store ON sale.sale_store = store.id
INNER JOIN item ON sale.sale_item = item.id;

-- view all sales with employee name, store name, and item name --
Select sale.id, sale_date, employee_name, store_name, item_name, sale_total from sale
INNER JOIN employee ON sale.sale_employee = employee.id
INNER JOIN store ON sale.sale_store = store.id
INNER JOIN item ON sale.sale_item = item.id;

-- add a new store --
-- enter store name, store number, store address, store open, and chain id --
INSERT INTO store (store_name, store_number, store_address, store_open, chain_id)
VALUES ('(store name)', '(store number)', '(store address)', '(store open)', '(chain id)');

-- add a new employee --
-- enter employee name, hired date, contact number, sales made, and store id --
INSERT INTO employee (employee_name, hired_date, contact_number, sales_made, store_id)
VALUES ('(employee name)', '(hired date)', '(contact number)', '(sales made)', '(store id)');

-- add a new item --
-- enter item name, item description, and item price --
INSERT INTO item (item_name, item_description, item_price)
VALUES ('(item name)', '(item description)', '(item price)');

-- add a new sale --
-- enter sale date, sale employee, sale store, sale item, sale item two, sale item three, sale item four, sale item five, and sale total --
INSERT INTO sale (sale_date, sale_employee, sale_store, sale_item, sale_item_two, sale_item_three, sale_item_four, sale_item_five, sale_total)
VALUES ('(sale date)', '(sale employee)', '(sale store)', '(sale item)', '(sale item two)', '(sale item three)', '(sale item four)', '(sale item five)', '(sale total)');

-- update a store --
UPDATE store
SET store_name = '(store name)', store_number = '(store number)', store_address = '(store address)', store_open = '(store open)'
WHERE id = '(store id)';

-- update an employee --
UPDATE employee
SET employee_name = '(employee name)', hired_date = '(hired date)', contact_number = '(contact number)', sales_made = '(sales made)', store_id = '(store id)'
WHERE id = '(employee id)';

-- update an item --
UPDATE item
SET item_name = '(item name)', item_description = '(item description)', item_price = '(item price)'
WHERE id = '(item id)';

-- update a sale --
UPDATE sale
SET sale_date = '(sale date)', sale_employee = '(sale employee)', sale_store = '(sale store)', sale_item = '(sale item)', sale_item_two = '(sale item two)', sale_item_three = '(sale item three)', sale_item_four = '(sale item four)', sale_item_five = '(sale item five)', sale_total = '(sale total)'
WHERE id = '(sale id)';

-- delete a store --
DELETE FROM store
WHERE id = '(store id)';

-- delete an employee --
DELETE FROM employee
WHERE id = '(employee id)';

-- delete an item --
DELETE FROM item
WHERE id = '(item id)';

-- delete a sale --
DELETE FROM sale
WHERE id = '(sale id)';

-- view all employees in order of most sales made --
Select employee.id, employee_name, hired_date, sales_made, store_name, sum(sale.sale_total) as total_sales from employee
INNER JOIN store ON employee.store_id = store.id
INNER JOIN sale ON employee.id = sale.sale_employee
GROUP BY employee.id
ORDER BY sum(sale.sale_total) DESC;

-- view all stores in order of most sales made --
Select store.id, store_name, store_number, store_open, count(employee.id) as total_employees, sum(sale.sale_total) as total_sales from store
INNER JOIN employee ON store.id = employee.store_id
INNER JOIN sale ON store.id = sale.sale_store
GROUP BY store.id
ORDER BY sum(sale.sale_total) DESC;

-- view all sales in order of largest total sale value --
Select sale.id, sale_date, employee_name, store_name, sale_item, sale_item_two, sale_item_three, sale_item_four, sale_item_five, sale_total from sale
INNER JOIN employee ON sale.sale_employee = employee.id
INNER JOIN store ON sale.sale_store = store.id
INNER JOIN item ON sale.sale_item = item.id
INNER JOIN item ON sale.sale_item_two = item.id
INNER JOIN item ON sale.sale_item_three = item.id
INNER JOIN item ON sale.sale_item_four = item.id
INNER JOIN item ON sale.sale_item_five = item.id
GROUP BY sale.id
ORDER BY sale_total DESC;
