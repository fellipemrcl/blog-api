const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const config = { algorithm: 'HS256', expiresIn: '7d' };

const generateToken = (payload) => jwt.sign(payload, secret, config);

const generatePayload = (token) => jwt.verify(token, secret);

module.exports = {
  generateToken,
  generatePayload,
};