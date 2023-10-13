# ChainStore DB SQL

## Description

This is the SQL command line version of the Database I created for a chain of stores. The database is designed to hold informations for the Chain, Stores, Employees, Items, and Sales within the umbrella. The hierarchy is set up so there's 1 chain, each chain has many stores, and each store belongs to one chain. Each store has many employees, and each employee belongs to one store. Theres also a sales table which has relationships with the store that made the sale, the employee as well as up to 5 items included in the sale. The database is designed to hold all needed information for a chain brand and all it's associated stores and employees.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Installation

The first steps in installation are:

- clone the repo from github: https://github.com/TamasPinter/CLChainStoreDb
- run npm install in the terminal to install all the dependencies
- create a .env file in the root directory and add your MYSQL password for login details
- run the schema and seeds file in mysql to prep your database
- run npm start to start the server

## Usage

This is a command line application that allows you to view, add, and update employees, roles, and departments in a company database.

- To start the application, run node server.js in your terminal.
- You will be prompted with a list of options to choose from.
- Each listed option will bring you to a different menu where you can view, add, or update the corresponding data.
- The add and update options will also display your saved category afterwards so you can see the changes made.
- You can also exit the application at any time by selecting the Exit option.

## Credits

Copyright (c) 2023 Tamas Pinter

## License

MIT License

Copyright (c) 2023 TamasPinter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

If you have any questions, please contact me at tamaspinter13@gmail.com or visit my github page at https://github.com/TamasPinter for a look at my other works!
