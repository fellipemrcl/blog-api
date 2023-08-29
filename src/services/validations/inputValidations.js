const { userSchema, categorySchema, postSchema } = require('./schema');

const userValidation = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
  }
};

const validateNameCategory = (name) => {
  const { error } = categorySchema.validate(name);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
   }
};

const validatePostCategory = (post) => {
  const { error } = postSchema.validate(post);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
   }
};

module.exports = {
  userValidation,
  validateNameCategory,
  validatePostCategory,
};
