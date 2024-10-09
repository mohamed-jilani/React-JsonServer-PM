# React CRUD Products with JSON Server

This project is a simple CRUD (Create, Read, Update, Delete) application for managing products, built with **React** and using **JSON Server** as a fake REST API.

## Features

- List all products.
- Create a new product.
- Edit an existing product.
- Delete a product.
- Refresh the product list.
  
## Technologies Used

- React
- JSON Server
- Bootstrap (for styling)

## Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

1. **Node.js**: [Download and install Node.js](https://nodejs.org/en/download/)
2. **npm**: Comes with Node.js, but you can verify the installation by running:
   ```bash
   npm --version
Installation
Clone the repository:

bash
Copier le code
git clone https://github.com/mohamed-jilani/React-JsonServer-PM.git
Navigate to the project directory:

bash
Copier le code
cd React-JsonServer-PM
Install the project dependencies:

bash
Copier le code
npm install
Running the Application
Start the JSON Server to serve the fake REST API. Run the following command to launch the server:

bash
Copier le code
npx json-server --watch db.json --port 3004
In another terminal, start the React application:

bash
Copier le code
npm start
Open your browser and visit http://localhost:3000 to see the application.

Folder Structure
src/components/Products.js: Contains the product-related components, including product list, form, and CRUD logic.
db.json: This file holds the product data used by JSON Server.
CRUD Operations
Create: Click the "Create" button, fill out the form, and submit.
Read: The product list displays all available products.
Update: Click the "Edit" button next to a product, modify the details, and save.
Delete: Click the "Delete" button to remove a product from the list.
API Endpoints
The JSON Server runs at http://localhost:3004. The key endpoints used in the project are:

GET /products: Fetch all products.
POST /products: Add a new product.
PATCH /products/:id: Update an existing product.
DELETE /products/:id: Delete a product.
License
This project is licensed under the MIT License.