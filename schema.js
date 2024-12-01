const Joi = require('joi');
const { model } = require('mongoose');

module.exports.lisitngSchema = Joi.object({
listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location:  Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.string().required().min(0),
    lmage:Joi.string().allow("",null),

}).required(),
})



module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        Comment:Joi.string().required(),
    }).required(),
});