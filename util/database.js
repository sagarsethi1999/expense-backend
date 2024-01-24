const Sequelize = require ('sequelize')

const sequelize = new Sequelize('expense-tracker', 'root', 'sagarhero143', {
    host: 'localhost',
    dialect: 'mysql',
  });

  module.exports = sequelize;