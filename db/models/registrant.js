'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Registrant = db.define('registrant', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false
  }, 
  age: Sequelize.INTEGER,
  gender: Sequelize.ENUM('female', 'male'),
  auxilary: Sequelize.ARRAY(Sequelize.TEXT),
  transport: Sequelize.BOOLEAN
})

module.exports = Registrant
