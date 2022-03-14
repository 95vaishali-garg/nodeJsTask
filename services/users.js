'use strict'
const encrypt = require('../permit/crypto')
const auth = require('../permit/auth')
const response = require('../exchange/response');
const message = require('../helpers/message');

const set = (model, entity, context) => {
    const log = context.logger.start('services/users/set')



    if (model.firstName) {
        entity.firstName = model.firstName
    }
    if (model.status) {

        entity.status = model.status

    }
    if (model.lastName) {
        entity.lastName = model.lastName
    }
    if (model.email) {
        entity.email = model.email
    }

    log.end()
    entity.save()
    return entity
}



const create = async (req, model, context, res) => {
    try {
        let user
        let query = {}

        if (model.email) {
            query.email = model.email

        }

        // find user
        user = await db.Users.findOne(query)

        // user not found
        if (!user) {


            user = await new db.Users(model).save()

            //create & encrypt password
            // user.password = encrypt.getHash(model.password, context);
            // user.save()

        }
        else {
            throw new Error(message.userExists)

        }

        return user

    } catch (err) {
        throw new Error(err)
    }
}



const update = async (id, model, res, context) => {
    const log = context.logger.start(`services/users:${id}`)
    try {

        const entity = await db.Users.findById(id)

        if (!entity) {
            return response.notFound(res, 'user_not_found')
        }

        // call set method to update user
        await set(model, entity, context)

        log.end()
        return entity
    } catch (err) {
        throw new Error(err)
    }
}



const getById = async (id, context) => {
    const log = context.logger.start(`services/users/getById:${id}`)

    let user
    try {
        user = await db.Users.findById(id)
        log.end()

        return user

    } catch (err) {
        log.end()
        throw new Error(err)
    }
}



const get = async (req, context, res) => {
    const log = context.logger.start(`api/users/get`)

    try {
        const params = req.query;

        let queryModel = {}
        let user


        // if status
        if (params.status && (params.status != null || params.status != undefined || params.status != '')) {
            queryModel = Object.assign({
                "status": {
                    $eq: params.status
                }
            }, queryModel)
        }



        // find user
        // user = await db.Users.find(queryModel).sort({
        //     timeStamp: -1
        // });

        user = await db.Users.aggregate([
            {
                $lookup:
                {
                    from: "Address",
                    localField: "_id",
                    foreignField: "userId",
                    as: "address"
                }
            },
           

        ]).limit(20).sort({
            timeStamp: -1
        })




        return user
    } catch (err) {
        log.end()
        throw new Error(err)
    }
}

exports.create = create

exports.get = get
exports.getById = getById
exports.update = update















