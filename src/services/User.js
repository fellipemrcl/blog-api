const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    createUser,
    getByEmail,
};