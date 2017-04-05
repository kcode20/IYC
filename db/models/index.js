'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Registrant = require('./registrant')
const Church = require('./church')

OAuth.belongsTo(User)
Registrant.belongsTo(Church)
User.hasOne(OAuth)
module.exports = {User, Registrant, Church}
