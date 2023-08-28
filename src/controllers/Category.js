const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { data, status } = await categoryService.createCategory(name);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
};
