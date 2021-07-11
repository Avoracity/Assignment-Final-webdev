const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Campus Name'
  },

  description: {
    type: Sequelize.TEXT('large'),
  },
  
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'no address specified.'
  },

  imgurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://discordia.me/uploads/easter-eggs/banana.png",
  },

});

module.exports = Campus;