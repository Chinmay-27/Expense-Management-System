const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const userRoutes = require('./routes/user.routes');
const expenseRoutes = require('./routes/expense.routes');

// Create an instance of the Express application
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Define a root route to avoid the "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Welcome to the Daily Expenses Sharing Application API!');
});

// Use user and expense routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

// Connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/expensesApp', {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//})
mongoose.connect('mongodb+srv://BackendInternTask_Convin:BackendInternTask_Convin@cluster0.qj58k.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
