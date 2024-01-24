// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Route to get all expenses
router.get('/user/expense', expenseController.getAllExpenses);

// Route to add a new expense
router.post('/user/expense', expenseController.addExpense);

// Route to update an expense
router.put('/user/expense/:id', expenseController.updateExpense);

// Route to delete an expense
router.delete('/user/expense/:id', expenseController.deleteExpense);

module.exports = router;
