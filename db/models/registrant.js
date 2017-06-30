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
    type: Sequelize.STRING,
  },
  age: Sequelize.ENUM('0-12', '13-17', '18-25', '25-39', '40+'),
  gender: Sequelize.ENUM('female', 'male'),
  auxilary: Sequelize.ARRAY(Sequelize.TEXT),
  transport: Sequelize.BOOLEAN,
  payment: Sequelize.BOOLEAN
})

module.exports = Registrant
