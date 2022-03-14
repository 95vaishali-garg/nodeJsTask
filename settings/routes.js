'use strict'

const fs = require('fs')

const api = require('../api')
var auth = require('../permit')
  let validator=require('../validators')



const configure = (app) => {
  


  // .......................users routes..............................

  app.post('/api/users/signup', auth.context.builder,validator.users.canCreate,  api.users.create);
  
 
  app.get('/api/users', auth.context.builder, auth.context.requiresToken, api.users.get);

  

  app.get('/api/users/:id', auth.context.builder,  validator.users.getById, api.users.getById);
  app.put('/api/users/:id', auth.context.builder,   validator.users.update, api.users.update);
  

  // ................................upload address............................................
  app.post('/api/address', auth.context.builder,  api.address.create)
  

  app.get('/api/address', auth.context.builder, api.address.get);

 
  app.put('/api/address/:id', auth.context.builder,   validator.address.update, api.address.update);
  

  

  
}
exports.configure = configure