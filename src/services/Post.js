const { BlogPost, Category, PostCategory, User } = require('../models');
const { postSchema } = require('./validations/schema');

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

const createPost = async ({ title, content, categoryIds, userId }) => {
  const { error } = postSchema.validate({ title, content, categoryIds, userId });

  if (error) { return { status: 'INVALID_VALUE', data: { message: error.message } }; }

  const areCategoryIdsValid = await checkCategoryIds(categoryIds);

  if (areCategoryIdsValid) return areCategoryIdsValid;
  
  const newPost = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  await PostCategory
  .bulkCreate([...categoryIds.map((eachId) => ({ categoryId: eachId, postId: newPost.id }))]);

  return { status: 'CREATED', data: newPost.dataValues };
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        through: { attributes: { exclude: ['postId', 'categoryId'] } } },
    ],
  });

  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  createPost,
  getPosts,
};
