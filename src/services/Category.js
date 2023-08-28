const { Category } = require('../models');
const { validateNameCategory } = require('./validations/inputValidations');

const createCategory = async (name) => {
  const error = validateNameCategory(name);

  if (error) return { status: error.status, data: { message: error.message } };

  const category = await Category.create({ name });

  return { status: 'CREATED', data: category.dataValues };
};

module.exports = {
  createCategory,
};
