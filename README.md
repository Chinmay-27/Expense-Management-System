# BackendInternTask_Convin
Expense Management System
Overview
The Expense Management System is a backend application designed to facilitate efficient expense tracking and management among users. It allows users to add expenses, split costs among participants using various methods, and generate balance sheets. This project aims to simplify the process of managing shared expenses in social or group settings.

Features
User Management
Create User: Users can register with their email, name, and mobile number.
Retrieve User Details: Users can fetch their details based on their unique user ID.
Expense Management
Add Expense: Users can create a new expense, specifying its description, total amount, split method, and participants.
Retrieve Individual User Expenses: Users can view all expenses they are associated with.
Retrieve Overall Expenses: A comprehensive view of all expenses in the system is available.
Download Balance Sheet: Users can download a balance sheet in JSON format, summarizing their expenses.
Expense Splitting Methods
Equal Split: The total expense is divided equally among all participants.
Exact Split: Each participant can specify the exact amount they owe.
Percentage Split: Participants can specify the percentage of the total expense they are responsible for (the total percentages must sum to 100%).
Tech Stack
Node.js: JavaScript runtime for building the backend service.
Express.js: Web framework for building APIs.
MongoDB: NoSQL database for storing user and expense data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
Postman: API client for testing and documenting the API.
Setup Instructions
Clone the Repository:

bash
Copy code
git clone [repository-url]
cd [repository-folder]
Install Dependencies: Ensure you have Node.js and npm installed. Run the following command to install all required packages:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env file in the root directory of the project. Add the following environment variables:

makefile
Copy code
MONGODB_URI=[Your MongoDB connection string]
PORT=5000
Start the Server: Run the following command to start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

Testing the API: You can test the API using Postman. Import the provided Postman collection for a convenient way to test all endpoints.

API Documentation
User Endpoints
Create User

Endpoint: /api/users
Method: POST
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "name": "User Name",
  "mobileNumber": "1234567890"
}
Response: Returns the created user details along with a unique user ID.
Retrieve User Details

Endpoint: /api/users/:userId
Method: GET
Path Parameter:
userId: Unique identifier for the user.
Response: Returns the user's details.
Expense Endpoints
Add Expense

Endpoint: /api/expenses
Method: POST
Request Body:
json
Copy code
{
  "description": "Expense description",
  "totalAmount": 3000,
  "splitMethod": "equal", // Can be "equal", "exact", or "percentage"
  "participants": [
    {
      "mobileNumber": "1234567890"
    },
    {
      "mobileNumber": "0987654321"
    }
  ]
}
Response: Returns the created expense details, including split amounts.
Retrieve Individual User Expenses

Endpoint: /api/expenses/user/:userId
Method: GET
Path Parameter:
userId: Unique identifier for the user.
Response: Returns all expenses associated with the specified user.
Retrieve Overall Expenses

Endpoint: /api/expenses
Method: GET
Response: Returns a list of all expenses in the system, including participant details.
Download Balance Sheet

Endpoint: /api/expenses/download
Method: GET
Response: Returns a JSON file containing a balance sheet summarizing all expenses.
Expense Splitting Method Details
Equal Split: Each participant pays the same amount, calculated as:

Amount Owed
=
Total Amount
Number of Participants
Amount Owed= 
Number of Participants
Total Amount
​
 
Exact Split: Each participant specifies the amount they owe directly. Ensure that the total amount specified matches the total amount of the expense.

Percentage Split: Each participant specifies the percentage they owe. The percentages must sum to 100%. The calculation is done as follows:

Amount Owed
=
Total Amount
×
Percentage
100
Amount Owed= 
100
Total Amount×Percentage
​
 
Postman Collection
You can find the Postman collection for this project here. Import the collection into Postman to test the API endpoints easily.

License
This project is licensed under the MIT License.
