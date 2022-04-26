const usersService = require("../services/usersService");

const getAll = async (req, res) => {
    const { name } = req.query;
    console.log(name);
    // Manggil Service Get Users
    const getUsers = await usersService.getAll({ name });
    res.send(getUsers);
  };

const create = async (req, res) => {
  const { name, email } = req.body;

  const createdBook = await usersService.create({ name, email });

  res.status(201).send({
    message: "Berhasil membuat buku baru",
    created_book: createdBook,
  });
};

module.exports = { getAll, create };
