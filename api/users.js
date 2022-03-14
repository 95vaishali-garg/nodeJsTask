'use strict'

const response = require('../exchange/response')
const service = require('../services/users')
const mapper = require('../mappers/user')
const api = require('./api-base')('users', 'user');
const message = require('../helpers/message');


module.exports = api