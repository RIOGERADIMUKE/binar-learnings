const { user, post } = require("../models");

class UsersRepository {
  static async getByEmail({ email }) {
    const getUser = await user.findOne({ where: { email: email } });

    return getUser;
  }

  static async create({ name, email, password }) {
    const createdUser = user.create({
      name,
      email,
      password,
    });

    return createdUser;
  }

  static async getPostsByID({ id }) {
    const getPosts = await post.findAll({ where: { user_id: id } });

    return getPosts;
  }
}

module.exports = UsersRepository;
