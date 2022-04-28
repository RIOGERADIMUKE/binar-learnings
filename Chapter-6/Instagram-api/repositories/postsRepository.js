const { post } = require("../models");

class PostsRepository {
  static async create({ user_id, title, description }) {
    const createdPost = post.create({
      user_id,
      title,
      description,
    });

    return createdPost;
  }

  static async getByID({ id }) {
    const getPost = await post.findOne({ where: { id } });

    return getPost;
  }

  static async deleteByID({ id }) {
    const deletePost = await post.destroy({ where: { id } });

    return deletePost;
  }

  static async updateByID({ id, title, description }) {
    const deletePost = await post.update(
      {
        title,
        description,
      },
      { where: { id } }
    );

    return deletePost;
  }
}

module.exports = PostsRepository;
