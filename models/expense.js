
const Sequelize = require('sequelize')

const sequelize = require ('../util/database')

const Expense = sequelize.define('expense', {
    ExpenceAmount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Catagory: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Expense;