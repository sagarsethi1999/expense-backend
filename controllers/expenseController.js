// controllers/expenseController.js
const Expense = require('../models/expense');

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Add a new expense
exports.addExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);
    res.json({ newExpense });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    const updatedExpense = await Expense.update(req.body, {
      where: {
        id: expenseId,
      },
    });
    res.json({ updatedExpense });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    await Expense.destroy({
      where: {
        id: expenseId,
      },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};
