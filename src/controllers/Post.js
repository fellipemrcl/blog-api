const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const createPost = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { title, content, categoryIds } = req.body;
    const { data, status } = await postService.createPost({
      title,
      content,
      categoryIds,
      userId,
    });
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const { data, status } = await postService.getPosts();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, status } = await postService.getPostById(id);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};
