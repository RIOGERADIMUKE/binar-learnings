const usersService = require("../services/usersService");

const getAll = async (req, res) => {
  // Manggil Service Get Books
  const getUsers = await usersService.getAll();

  res.send(getUsers);
};

const create = async (req, res) => {
  const { name, email } = req.body;

  const createdUser = await usersService.create({ name, email });

  res.status(201).send({
    message: "Berhasil membuat user baru",
    created_book: createdUser,
  });
};


  const getById = async (req, res) => {
  const {id} = req.params;
  const usersById = await usersService.getById({id});

  res.status(200).send(usersById);
}


const updateById = async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const updateUserById = await usersService.updateById({
 id, name, email
  });

  res.status(200).send(updateUserById);
};

const deleteById = async (req, res) => { 
  const { id } = req.params; 
  const deleteUsersById = await usersService.deleteById({ id }); 
 
  res.status(200).send({ 
    message: "Successfully Deleted User", 
    deleted_user: deleteUsersById, 
  }); 
};

// posts
const getAllPosts = async (req, res) => {
  // Manggil Service Get Books
  const getUsersPosts = await usersService.getAllPosts();

  res.send(getUsersPosts);
};

const createByPosts = async (req, res) => {
  const { title, description, user_id } = req.body;

  const createdPosts = await usersService.create({ title, description, user_id });

  res.status(201).send({
    message: "Berhasil membuat user baru",
    created_Posts: createdPosts,
  });
};

module.exports = { getAll, create, getById, updateById, deleteById, getAllPosts, createByPosts};
