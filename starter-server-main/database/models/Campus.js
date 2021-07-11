const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },
  
  address: {
    type: Sequelize.STRING,
  },

  imgurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://discordia.me/uploads/easter-eggs/banana.png",
    validate: {
      isUrl: true,
    },
  },

});

module.exports = Campus;