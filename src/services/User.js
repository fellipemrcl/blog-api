const { User } = require('../models');
const { userValidation } = require('./validations/inputValidations');

const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }

  return { status: 'SUCCESSFUL', data: user };
};

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = async ({ displayName, email, password, image }) => {
  const error = userValidation({ displayName, email, password, image });

  if (error) return { status: error.status, data: { message: error.message } };

  const emailExists = await getByEmail(email);
  
  if (emailExists) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  const createdUser = await User.create({ displayName, email, password, image });

  return {
    status: 'CREATED',
    data: createdUser.dataValues,
  };
};

module.exports = {
  createUser,
  findById,
  getByEmail,
};
