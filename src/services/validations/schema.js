const joi = require('joi');

const userSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
});

const categorySchema = joi.string().required().messages({
  'any.required': '"name" is required',
});

const postSchema = joi
  .object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().min(1).items(joi.number()).required(),
    userId: joi.number(),
  })
  .messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  });

module.exports = {
  categorySchema,
  postSchema,
  userSchema,
};
