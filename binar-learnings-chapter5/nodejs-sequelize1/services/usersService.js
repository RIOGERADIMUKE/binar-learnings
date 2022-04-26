const usersRepository = require("../repositories/usersRepository");

class UsersService {
  static async getAll() {
    // Manggil repo get all books
    const getUsers = await usersRepository.getAll();

    return getUsers;
  }

  static async create({ name, email }) {
    const createdUser = await usersRepository.create({
      name,
      email,
    });

    return createdUser;
  }

  static async getById({id}) {
    // Manggil repo get by id books
    const filterById = await usersRepository.getById({
        id
    });
    return filterById;
}

static async updateById({
  id, name, email
}) {
  // Manggil repo get by id books
  const updateUserById = await usersRepository.updateById({
      id, name, email
  });

  return updateUserById;
}

static async deleteById({ id }) {
  // Manggil repo get by id books 
  const deleteUsersById = await usersRepository.deleteById({
      id
  });
  return deleteUsersById;
}

// posts
static async getAllPosts() {
  // Manggil repo get all books
  const getUsersPosts = await usersRepository.getAllPosts();

  return getUsersPosts;
}

static async createByPosts({ title, description, user_id }) {
  const createdUserByPosts = await usersRepository.create({ title, description, user_id });

  return createdUserByPosts;
}
}

module.exports = UsersService;
