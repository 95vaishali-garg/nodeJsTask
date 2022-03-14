'use strict'

global.Promise = require('bluebird')

const express = require('express')
const appConfig = require('config').get('app')
const webConfig = require('config').get('webServer')

const logger = require('@open-age/logger')('server')
const port = process.env.PORT || appConfig.port || webConfig.port
const Http = require('http');

const app = express()
var server = Http.createServer(app);

const bodyParser = require('body-parser');


const boot = () => {
    const log = logger.start('app:boot')
    log.info('starting server ...')

    app.listen(port, () => {
        console.log(`listening on port: ${port}`)
        log.end()
    })
}

const init = () => {
    require('./settings/database').configure(logger)
    require('./settings/express').configure(app, logger)
    require('./settings/routes').configure(app, logger)
   



    boot()
}


// app.use(morgan('dev'));
init()