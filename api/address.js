'use strict'

const response = require('../exchange/response')
const service = require('../services/address')
const api = require('./api-base')('address', 'address');
const message = require('../helpers/message');

module.exports = api