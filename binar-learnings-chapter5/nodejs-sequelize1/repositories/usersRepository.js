const { users } = require("../models");

class UsersRepository {
  static async getAll() {
    const getUsers = users.findAll();

    return getUsers;
  }


  static async create({ name, email }) {
    const createdUser = users.create({
      name,
      email,
    });
    return createdUser;
  }


  static async getById({id}) {
    const getUsersById = users.findOne({
      where: {id},
    });
    return getUsersById;
  }


  static async updateById({id, name, email}) {
    const query = {
      where: {id}
    }
    const getUsersById = users.update({
     name, email
    },query);
    return getUsersById;
  }


  static async deleteById({ id }) { 
    const deleteUserById = users.destroy({ 
      where: { id }, 
    }); 
    return deleteUserById; 
  }

  // posts
  static async getAllPosts() {
    const getUsersPosts = users.findAll();

    return getUsersPosts;
  }

  static async createByPosts({ title, description, user_id }) {
    const createdByPosts = users.create({ title, description, user_id });
    return createdByPosts;
  }

}

module.exports = UsersRepository;
