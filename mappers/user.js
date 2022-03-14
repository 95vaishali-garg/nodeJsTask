'use strict'

// users create mapper
exports.toModel = entity => {

    var model = {
        _id: entity._id,
        status: entity.status
      

    }

   
    return model
}



// // for get 

exports.toSearchModel = (entities, context) => {
    return entities.map((entity) => {
        return exports.toModel(entity, context)
    })
}