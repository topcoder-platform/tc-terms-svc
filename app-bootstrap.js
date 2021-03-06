/**
 * App bootstrap
 */

global.Promise = require('bluebird')
const Joi = require('joi')

Joi.optionalNumberId = () => Joi.number().integer().min(1).max(2147483647)
Joi.numberId = () => Joi.optionalNumberId().required()
Joi.uuid = () => Joi.string().uuid().required()
Joi.page = () => Joi.number().integer().min(1).default(1)
Joi.perPage = () => Joi.number().integer().min(1).max(100).default(20)
