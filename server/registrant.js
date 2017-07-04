'use strict'

const db = require('APP/db')
const Registrant = db.model('registrant')
const Church= db.model('church')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list registrant'), (req, res, next) =>
		Registrant.findAll()
		.then(registrant => res.json(registrant))
		.catch(next))
	.post('/', (req, res, next) =>{
		console.log(req.body)
		Registrant.create(req.body, {include: [Church]})
		.then(registrant => res.status(201).json(registrant))
		.catch(next)})
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		Registrant.findById(req.params.id)
		.then(registrant => res.json(registrant))
		.catch(next))
	.put('/:id', (req, res, next) =>{
		Registrant.findById(req.params.id)
		.then(registrant => {
			registrant.updateAttributes({payment: req.body.payment})
		})})