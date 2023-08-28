const { userSchema } = require('./schema');

const userValidation = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
  }
};

module.exports = {
  userValidation,
};
