const Joi = require('@hapi/joi');


const registerValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required(true).email(),
        passWord: Joi.string().min(6).required(true),
    })
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required(true).email(),
        password: Joi.string().min(6).required(true),
    })
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;