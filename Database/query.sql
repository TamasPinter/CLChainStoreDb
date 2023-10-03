-- view basic chain info--
Select id, chain_name, chain_description, chain_established, chain_headquarters from chain;

-- view chain info with total number of stores and total amount of sales --
Select chain.id, chain_name, chain_description, chain_established, chain_headquarters, count(store.id) as total_stores, sum(sale.sale_total) as total_sales from chain;

-- view store info with number of employees and total amount of sales --
Select store.id, store_name, store_number, store_address, store_open, count(employee.id) as total_employees, sum(sale.sale_total) as total_sales from store;

-- view all employees with their store name and total sales --
Select employee.id, employee_name, hired_date, contact_number, sales_made, store_name, sum(sale.sale_total) as total_sales from employee;

-- view all items --
Select id, item_name, item_description, item_price from item;

-- view all sales --
Select id, sale_date, sale_employee, sale_store, sale_item, sale_item_two, sale_item_three, sale_item_four, sale_item_five, sale_total from sale;