const { generatePayload } = require('../auth');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const token = authorization.split(' ')[1]; // token
    const payload = generatePayload(token);
    req.payload = payload;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;