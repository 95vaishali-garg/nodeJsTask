// 'use strict'


const set = (model, entity, context) => {
    const log = context.logger.start('services/users/set')



    if (model.address1) {
        entity.address1 = model.address1
    }
    if (model.status) {

        entity.status = model.status

    }
    if (model.city) {
        entity.city = model.city
    }
    if (model.state) {
        entity.state = model.state
    }
    if (model.postelCode) {
        entity.postelCode = model.postelCode
    }
    log.end()
    entity.save()
    return entity
}



const create = async (req, model, context, res) => {
    
    try {
       

        let address = await new db.Address(model).save()
    
        return address 

    } catch (err) {
       
        throw new Error(err)
    }
}


const get = async (req, context) => {
    
    let query={}
    let params=req.query
    try {
            query = {
               
            }
        
        var Address = await db.Address.find(query).populate( )
       
        return Address
    } catch (err) {
       
        throw new Error(err)
    }
}



const update = async (id, model, res, context) => {
    const log = context.logger.start(`services/users:${id}`)
    try {

        const entity = await db.Address.findById(id)

        if (!entity) {
            return response.notFound(res, 'address_not_found')
        }

        // call set method to update user
        await set(model, entity, context)

        log.end()
        return entity
    } catch (err) {
        throw new Error(err)
    }
}
exports.create = create
exports.get=get
exports .update=update