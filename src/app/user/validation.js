const Joi = require('joi');
const { password, objectId } = require('../../infra/validations/custom.validation');

const CreateUserValidation = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const GetAllUserValidation = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const GetUserValidation = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const UpdateUserValidation = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const DeleteUserValidation = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  CreateUserValidation,
  GetAllUserValidation,
  GetUserValidation,
  UpdateUserValidation,
  DeleteUserValidation,
};