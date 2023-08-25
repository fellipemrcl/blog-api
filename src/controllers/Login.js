const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const missingFieldsError = 'Some required fields are missing';
const invalidFieldsError = 'Invalid fields';

const isValidFields = (email, password) => email && password;

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isValidFields(email, password)) {
      return res.status(400).json({ message: missingFieldsError });
    }

    const user = await userService.getByEmail(email);

    if (!user || user.dataValues.password !== password) {
      return res.status(400).json({ message: invalidFieldsError });
    }

    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d', algorithm: 'HS256' },
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  userLogin,
};
