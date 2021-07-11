const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'John'
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Doe'
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "JohnDoe@johndoe.com",
    validate: {
      isEmail: true,
    }
  },

  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://discordia.me/uploads/easter-eggs/banana.png",
  },

  gpa: {
    type: Sequelize.STRING,
    defaultValue: "N/A",
    isDecimal: true,
    validate: {min: 0.0, max: 4.0 },
  },

});

module.exports = Student;