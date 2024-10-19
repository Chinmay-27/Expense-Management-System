
# Expense Management System

## Overview

The **Expense Management System** is a web application designed to help users efficiently manage their expenses. This application allows users to create profiles, add expenses, split costs among multiple participants, and download a balance sheet summarizing individual and overall expenses. The system supports three methods of splitting expenses: **Equal**, **Exact**, and **Percentage**.

## Features

### User Management
- **Create User**: Add new users with email, name, and mobile number.
- **Retrieve User Details**: Fetch details of a specific user by their unique ID.

### Expense Management
- **Add Expense**: Users can record an expense, specifying how to split it among participants.
- **Retrieve Individual User Expenses**: Users can view all expenses they are involved in.
- **Retrieve Overall Expenses**: Fetch a list of all expenses recorded in the system.
- **Download Balance Sheet**: Download a summary of expenses in JSON format for further analysis.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API Testing**: Postman

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone [repository-url]
   cd [repository-folder]
   ```

2. **Install Dependencies:**
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string and server port:
   ```
   MONGODB_URI=[Your MongoDB connection string]
   PORT=5000
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

## API Documentation

### User Endpoints

#### Create User
- **POST** `/api/users`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "name": "User Name",
    "mobileNumber": "1234567890"
  }
  ```

- **Response:**
  - `201 Created`: Returns the created user object.
  - `400 Bad Request`: If validation fails (e.g., missing fields).

#### Retrieve User Details
- **GET** `/api/users/:userId`
- **Response:**
  - `200 OK`: Returns the user object.
  - `404 Not Found`: If the user does not exist.

### Expense Endpoints

#### Add Expense
- **POST** `/api/expenses`
- **Request Body:**
  ```json
  {
    "description": "Expense description",
    "totalAmount": 3000,
    "splitMethod": "equal",
    "participants": [
      {
        "mobileNumber": "1234567890"
      },
      {
        "mobileNumber": "0987654321"
      }
    ]
  }
  ```

- **Response:**
  - `201 Created`: Returns the created expense object.
  - `400 Bad Request`: If validation fails (e.g., invalid participants or percentages).

#### Retrieve Individual User Expenses
- **GET** `/api/expenses/user/:userId`
- **Response:**
  - `200 OK`: Returns an array of expenses for the specified user.

#### Retrieve Overall Expenses
- **GET** `/api/expenses`
- **Response:**
  - `200 OK`: Returns an array of all expenses.

#### Download Balance Sheet
- **GET** `/api/expenses/download`
- **Response:**
  - `200 OK`: Returns a JSON file of the balance sheet for download.

## Postman Collection
You can test the API using the provided Postman collection available [here](https://www.postman.com/sih666-9522/workspace/personal-projects/collection/37258897-6c3eb9fc-1343-4fba-b100-d9b3db85fa7a?action=share&creator=37258897). Import the collection into Postman for easy access to all endpoints.

## License
This project is licensed under the MIT License.

## Author
**Chinmay Raut**  
Nashik, Maharashtra  
Email: chinmayraut27@gmail.com  
LinkedIn: [Chinmay Raut](https://www.linkedin.com/in/chinmayraut276)

```

Feel free to customize the text, add more details, or modify the examples as necessary to better reflect your project and personal style!
