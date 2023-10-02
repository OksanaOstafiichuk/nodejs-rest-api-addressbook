const Joi = require('joi');

const bodySchema = Joi.object({
    userId: Joi.number().required(),
    country: Joi.string().min(3).max(45).required(),
    state: Joi.string().min(3).max(45),
    city: Joi.string().required(),
    zipCode: Joi.number().multiple(5),
    address: Joi.string().required()
})


module.exports = {bodySchema};