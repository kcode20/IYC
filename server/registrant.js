'use strict'

const db = require('APP/db')
const Registrant = db.model('registrant')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list registrant'), (req, res, next) => 
		Registrant.findAll()
		.then(registrant => res.json(registrant))
		.catch(next))
	.post('/', (req, res, next) =>{
		console.log(req.body)
		Registrant.create(req.body)
		.then(registrant => res.status(201).json(registrant))
		.catch(next)})
	.get('/:id', mustBeLoggedIn, (req, res, next) => 
		Registrant.findById(req.params.id)
		.then(registrant => res.json(registrant))
		.catch(next))