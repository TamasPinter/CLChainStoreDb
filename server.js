const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "ValueElectronicsChain",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
  mainMenu();
});

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Welcome to Value Electronics, what would you like to view?",
        choices: [
          "View basic chain info",
          "View chain info with number of stores and sales",
          "View store info with employee data",
          "View all stores with sales figures in order",
          "View employee data",
          "View employees by sales figures",
          "View all items",
          "View all sales",
          "View sales by value",
          "View more detailed sale data",
          "Add a new store",
          "Add a new employee",
          "Add a new item",
          "Add a new sale",
          "Update a store",
          "Update an employee",
          "Update an item",
          "Update a sale",
          "Delete a store",
          "Delete an employee",
          "Delete an item",
          "Delete a sale",
          "EXIT",
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;
      if (choices === "View basic chain info") {
        viewBasicInfo();
      }
      if (choices === "View chain info with number of stores and sales") {
        viewChainInfo();
      }
      if (choices === "View store info with employee data") {
        viewStoreInfo();
      }
      if (choices === "View all stores with sales figures in order") {
        viewStoresBySales();
      }
      if (choices == "View employee data") {
        viewEmployeeData();
      }
      if (choices === "View employees by sales figures") {
        viewEmployeesBySales();
      }
      if (choices === "View all items") {
        viewItems();
      }
      if (choices === "View all sales") {
        viewSales();
      }
      if (choices === "View sales by value") {
        viewSalesByValue();
      }
      if (choices === "View more detailed sale data") {
        viewDetailedSales();
      }
      if (choices === "Add a new store") {
        addStore();
      }
      if (choices === "Add a new employee") {
        addEmployee();
      }
      if (choices === "Add a new item") {
        addItem();
      }
      if (choices === "Add a new sale") {
        addSale();
      }
      if (choices === "Update a store") {
        updateStore();
      }
      if (choices === "Update an employee") {
        updateEmployee();
      }
      if (choices === "Update an item") {
        updateItem();
      }
      if (choices === "Update a sale") {
        updateSale();
      }
      if (choices === "Delete a store") {
        deleteStore();
      }
      if (choices === "Delete an employee") {
        deleteEmployee();
      }
      if (choices === "Delete an item") {
        deleteItem();
      }
      if (choices === "Delete a sale") {
        deleteSale();
      }
      if (choices === "EXIT") {
        connection.end();
      }
    });
};

viewBasicInfo = () => {
  console.log("Showing basic Chain info..\n");
  const sql = `SELECT chain.id AS "Chain ID", chain.chain_name AS "Chain Name", chain.chain_description AS "Chain Description", chain.chain_established AS "Chain Established", chain.chain_headquarters AS "Chain Headquarters" FROM chain`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewChainInfo = () => {
  console.log("Showing Chain info with number of stores and sale figures..\n");
  const sql = `SELECT chain.id AS "Chain ID", chain.chain_name AS "Chain name", chain.chain_description AS "Chain Description", chain.chain_established AS "Chain Established", chain.chain_headquarters AS "Chain Headquarters", COUNT(store.id) AS "Number of Stores", SUM(sale.sale_total) FROM chain
  LEFT JOIN store ON chain.id = store.store_parent
  LEFT JOIN sale ON store.id = sale.sale_store
  GROUP BY chain.id
  ORDER BY chain.id`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewStoreInfo = () => {
  console.log("Showing store info with employee data..\n");
  const sql = `SELECT store.id AS "Store ID", store.store_name AS "Store Name", store.store_address AS "Store Address", store.store_open AS "Store Opening", COUNT(employee.id) AS "Number of Employees" FROM store
  LEFT JOIN employee ON store.id = employee.store_id
  GROUP BY store.id
  ORDER BY store.id`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewStoresBySales = () => {
  console.log("Showing all stores with sales figures..\n");
  const sql = `SELECT store.id AS "Store ID", store.store_name AS "Store Name", store.store_address AS "Store Address", store.store_open AS "Store Opening", COUNT(employee.id) AS "Number of Employees", SUM(sale.sale_total) AS "Total Sales" FROM store
    LEFT JOIN employee ON store.id = employee.store_id
    LEFT JOIN sale ON employee.id = sale.employee_id
    GROUP BY store.id
    ORDER BY SUM(sale.sale_total) DESC`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewEmployeeData = () => {
  console.log("Showing Employee data..\n");
  const sql = `SELECT employee.id AS "Employee ID", employee.employee_name AS "Employee Name", employee.hired_date AS "Hired Date", employee.contact_number AS "Contact Number", employee.sales_made AS "Sales Made" store.store_name AS "Store Name" FROM employee
  LEFT JOIN store ON employee.store_id = store.id
  ORDER BY employee.id`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewEmployeesBySales = () => {
  console.log("Showing Employees by their sales figures..\n");
  const sql = `SELECT employee.id AS "Employee ID", employee.employee_name AS "Employee Name", employee.hired_date AS "Hired Date", employee.sales_made AS "Sales Made", SUM(sale.sale_total) AS "Total Sales" store.store_name AS "Store Name" FROM employee
    LEFT JOIN store ON employee.store_id = store.id
    LEFT JOIN sale ON employee.id = sale.employee_id
    GROUP BY employee.id
    ORDER BY SUM(sale.sale_total) DESC`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewItems = () => {
  console.log("Showing all items..\n");
  const sql = `SELECT item.id AS "Item ID", item.item_name AS "Item Name", item.item_description AS "Item Description", item.item_price AS "Item Price" FROM item
    ORDER BY item.id`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewSales = () => {
  console.log("Showing all sales..\n");
  const sql = `SELECT sale.id AS "Sale ID", sale.sale_date AS "Sale Date", sale.sale_employee AS "Sale Employee", sale.sale_store AS "Sale Store", sale.sale_item AS "Sale Item", sale.sale_item_two AS "Sale Item Two", sale.sale_item_three AS "Sale Item Three", sale.sale_item_four AS "Sale Item Four", sale.sale_item_five AS "Sale Item Five", sale.sale_total AS "Sale Total" FROM sale
  LEFT JOIN employee ON sale.employee_id = employee.id
  LEFT JOIN store ON sale.store_id = store.id
  ORDER BY sale.id`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewSalesByValue = () => {
  console.log("Showing all sales by value..\n");
  const sql = `SELECT sale.id AS "Sale ID", sale.sale_date AS "Sale Date", sale.sale_employee AS "Sale Employee", sale.sale_store AS "Sale Store", sale.sale_item AS "Sale Item", sale.sale_item_two AS "Sale Item Two", sale.sale_item_three AS "Sale Item Three", sale.sale_item_four AS "Sale Item Four", sale.sale_item_five AS "Sale Item Five", sale.sale_total AS "Sale Total" FROM sale
    LEFT JOIN employee ON sale.employee_id = employee.id
    LEFT JOIN store ON sale.store_id = store.id
    ORDER BY sale.sale_total DESC`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

viewDetailedSales = () => {
  console.log("Showing more detailed sale data..\n");
  const sql = `SELECT sale.id AS "Sale ID", sale.sale_date, AS "Sale Date", sale.sale_employee AS "Sale Employee", sale.sale_store AS "Sale Store", sale.sale_item AS "Sale Item", sale.sale_item_two AS "Sale Item Two", sale.sale_item_three AS "Sale Item Three", sale.sale_item_four AS "Sale Item Four", sale.sale_item_five AS "Sale Item Five", sale.sale_total AS "Sale Total" FROM sale
  LEFT JOIN employee ON sale.employee_id = employee.id
  LEFT JOIN store ON sale.store_id = store.id
  LEFT JOIN item ON sale.item_id = item.id
  LEFT JOIN item ON sale.item_two_id = item.id
  LEFT JOIN item ON sale.item_three_id = item.id
  LEFT JOIN item ON sale.item_four_id = item.id
  LEFT JOIN item ON sale.item_five_id = item.id
  ORDER BY sale.id`;
  connection.query(sql, (err, resp) => {
    if (err) throw err;
    console.table(resp);
    mainMenu();
  });
};

addStore = () => {
  console.log("Adding a new store..\n");
  const sql = `INSERT INTO store (store_name, store_address, store_open, chain_id) VALUES (?, ?, ?, ?)`;
  inquirer
    .prompt([
      {
        type: "input",
        name: "store_name",
        message: "What is the name of the store?",
      },
      {
        type: "input",
        name: "store_address",
        message: "What is the address of the store?",
      },
      {
        type: "input",
        name: "store_open",
        message: "When did the store open?(YYYY-MM-DD)",
      },
      {
        type: "input",
        name: "chain_id",
        message: "What is the chain ID?",
      },
    ])
    .then((answers) => {
      const { store_name, store_address, store_open, chain_id } = answers;
      connection.query(
        sql,
        [store_name, store_address, store_open, chain_id],
        (err, resp) => {
          if (err) throw err;
          console.log("New store added!");
          viewStoreInfo();
        }
      );
    });
};

addEmployee = () => {
  console.log("Adding a new employee..\n");
  const sql = `INSERT INTO employee (employee_name, hired_date, contact_number, store_id) 
  VALUES (?, ?, ?, ?)`;
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee_name",
        message: "What is the employee's full name?",
      },
      {
        type: "input",
        name: "hired_date",
        message: "When was the employee hired? (YYYY-MM-DD)",
      },
      {
        type: "input",
        name: "contact_number",
        message: "What is the employee's contact number?",
      },
      {
        type: "input",
        name: "store_id",
        message: "What is this employee's store ID?",
      },
    ])
    .then((answers) => {
      const { employee_name, hired_date, contact_number, store_id } = answers;
      connection.query(
        sql,
        [employee_name, hired_date, contact_number, store_id],
        (err, resp) => {
          if (err) throw err;
          console.log("New employee has been added!");
          viewEmployeeData();
        }
      );
    });
};

addItem = () => {
  console.log("Adding a new item..\n");
  const sql = `INSERT INTO item (item_name, item_description, item_price)
  VALUES (?, ?, ?,)`;
  inquirer
    .prompt([
      {
        type: "input",
        name: "item_name",
        message: "What is this item called?",
      },
      {
        type: "input",
        name: "item_description",
        message: "Give a brief description of the item.",
      },
      {
        type: "input",
        name: "item_price",
        message: "How much does the item cost?",
      },
    ])
    .then((answers) => {
      const { item_name, item_description, item_price } = answers;
      connection.query(
        sql,
        [item_name, item_description, item_price],
        (err, resp) => {
          if (err) throw err;
          console.log("New item has been added!");
          viewItems();
        }
      );
    });
};

addSale = () => {
  console.log("Adding a new sale..\n");
  const sql = `INSERT INTO sale (sale_date, sale_employee, sale_store, sale_item, sale_item_two, sale_item_three, sale_item_four, sale_item_five, sale_total)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  inquirer
    .prompt([
      {
        type: "input",
        name: "sale_date",
        message: "Enter date of transacion (YYYY-MM-DD)",
      },
      {
        type: "input",
        name: "sale_employee",
        message: "Enter employee ID",
      },
      {
        type: "input",
        name: "sale_store",
        message: "Enter store ID",
      },
      {
        type: "input",
        name: "sale_item",
        message: "Enter item ID",
      },
      {
        type: "input",
        name: "sale_item_two",
        message: "Enter next item ID if applicable",
      },
      {
        type: "input",
        name: "sale_item_three",
        message: "Enter next item ID if applicable",
      },
      {
        type: "input",
        name: "sale_item_four",
        message: "Enter next item ID if appplicable",
      },
      {
        type: "input",
        name: "sale_item_five",
        message: "Enter next item ID if applicable",
      },
      {
        type: "input",
        name: "sale_total",
        message: "Enter total cost of transaction",
      },
    ])
    .then((answers) => {
      const {
        sale_date,
        sale_employee,
        sale_store,
        sale_item,
        sale_item_two,
        sale_item_three,
        sale_item_four,
        sale_item_five,
        sale_total,
      } = answers;
      connection.query(
        sql,
        [
          sale_date,
          sale_employee,
          sale_store,
          sale_item,
          sale_item_two,
          sale_item_three,
          sale_item_four,
          sale_item_five,
          sale_total,
        ],
        (err, resp) => {
          if (err) throw err;
          console.log("New sale has been added!");
          viewSales();
        }
      );
    });
};

updateStore = () => {
  console.log("Updating a store..\n");
  const storeSql = `SELECT * FROM store`;
  connection.query(storeSql, (err, resp) => {
    if (err) throw err;
    const stores = resp.map({ name: "store name", value: "id" });
    inquirer
      .prompt([
        {
          type: "list",
          name: "store_name",
          message: "Which store would you like to update?",
          choices: stores,
        },
      ])
      // update all fields for selected store
      .then((answers) => {
        const { store_name } = answers;
        const sql = `UPDATE store SET store_name = ?, store_address = ?, store_open = ?, chain_id = ? WHERE id = ?`;
        inquirer
          .prompt([
            {
              type: "input",
              name: "store_name",
              message: "What is the name of the store?",
            },
            {
              type: "input",
              name: "store_address",
              message: "What is the address of the store?",
            },
            {
              type: "input",
              name: "store_open",
              message: "When did the store open?(YYYY-MM-DD)",
            },
            {
              type: "input",
              name: "chain_id",
              message: "What is the chain ID?",
            },
          ])
          .then((answers) => {
            const { store_name, store_address, store_open, chain_id } = answers;
            connection.query(
              sql,
              [store_name, store_address, store_open, chain_id],
              (err, resp) => {
                if (err) throw err;
                console.log("Store has been updated!");
                viewStoreInfo();
              }
            );
          });
      });
  });
};

updateEmployee = () => {};
