const Joi = require('joi');

const bodySchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).required(),
    lastName: Joi.string().alphanum().min(3).required(),
    phoneNumber: Joi.string().required(),
    birthday: Joi.date(),
    image: Joi.string()
})


module.exports = {bodySchema};