const { posts } = require("../models");

class PostsRepository {
  static async create({ user_id, title, description, picture }) {
    const createdPost = posts.create({
      user_id,
      title,
      description,
      picture
    });

    return createdPost;
  }
  static async getAll() {
    const getAll = await posts.findAll();

    return getAll;
}

  static async getByID({ id }) {
    const getPost = await posts.findOne({ where: { id } });

    return getPost;
  }

  static async deleteByID({ id }) {
    const deletePost = await posts.destroy({ where: { id } });

    return deletePost;
  }

  static async updateByID({ id, title, description, picture }) {
    const updatePost = await posts.update(
      {
        title,
        description,
        picture
      },
      { where: { id } }
    );

    return updatePost;
  }
}

module.exports = PostsRepository;