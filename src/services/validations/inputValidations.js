const { userSchema, categorySchema, postSchema } = require('./schema');
const { Category } = require('../../models');

const userValidation = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
  }
};

const validateNameCategory = (name) => {
  const { error } = categorySchema.validate(name);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
   }
};

const validatePostCategory = (post) => {
  const { error } = postSchema.validate(post);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: error.message,
    };
   }
};

const checkCategoryIds = async (categoryIds) => {
  const arrOfCategoriesPromise = categoryIds.map((categoryId) =>
    Category.findByPk(categoryId));
  const checkForNullCategories = (
    await Promise.all(arrOfCategoriesPromise)
  ).some((category) => category === null);
  if (checkForNullCategories) {
    return {
      status: 'INVALID_VALUE',
      data: { message: 'one or more "categoryIds" not found' },
    };
  }
};

module.exports = {
  userValidation,
  validateNameCategory,
  validatePostCategory,
  checkCategoryIds,
};
