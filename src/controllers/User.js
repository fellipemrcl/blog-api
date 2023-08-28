const { generateToken } = require('../auth');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const { data, status } = await userService.createUser(user);

    if (status === 'INVALID_VALUE' || status === 'CONFLICT') {
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const { password: _password, ...rest } = data;

    const payload = { data: rest };

    const token = generateToken(payload);

    return res.status(mapStatusHTTP(status)).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
