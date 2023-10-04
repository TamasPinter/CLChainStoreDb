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
      if (choices === "View chain info with number of stores and sale") {
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
