const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) =>
  User.create({ displayName, email, password, image });

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getByEmail,
};
