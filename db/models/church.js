'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Church = db.define('church', {
  church: Sequelize.STRING,
  pastor: Sequelize.STRING,
  leader: Sequelize.STRING,
})

module.exports = Church