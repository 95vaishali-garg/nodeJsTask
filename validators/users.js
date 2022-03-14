'use strict'
const validator = require('validator');

const response = require('../exchange/response')

exports.canCreate = (req, res, next) => {
    if (req.body) {
        if (!req.body.firstName) {
            response.failure(res, 'FirstName  is required')
        }
        if (!req.body.lastName) {
            response.failure(res, 'LastName  is required')
        }
       
       
        if (!req.body.email) {
            response.failure(res, 'email  is required')
        }
       
    }
    return next()
}

exports.getById = (req, res, next) => {

    if (!req.params && !req.params.id) {

        return response.failure(res, 'id is required')
    }

    return next()
}

exports.update = (req, res, next) => {
    if (!req.params && !req.params.id) {
        return response.failure(res, 'id is required')

    }
    return next()
}

