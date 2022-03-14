'use strict'

exports.toModel = entity => {
    var model = entity
    return model
}



exports.toSearchModel = (entities, context) => {
    return entities.map((entity) => {
      return exports.toModel(entity, context)
    })
  }


  
// for particular file
exports.toGetUser = entity => {
    let model = entity;
       
    return model;
  };