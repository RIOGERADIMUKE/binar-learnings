const instagramService = require("../services/instagramService");

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const registerUsers = await instagramService.register({ name, email, password
    });

    res.status(201).send({
        message: `${name} registered successfuly`,
        registerUsers
    });
};

const postingan = async (req, res) => {
    const { user_id, title, description } = req.body;

    const postingan = await instagramService.postingan({ user_id, title, description });

    res.status(201).send({
        message: `${user_id} post success`,
        postingan
    });
};

const login = async (req, res) => {
    const { email, password } = req.query;

    const loginUsers = await instagramService.login({ email, password });

    res.status(201).send(loginUsers);
};

const getAll = async (req, res) => {
    // Manggil Service Get Books
    const getUsers = await instagramService.getAll();

    res.send(getUsers);
};

const getAllPosts = async (req, res) => {
    // Manggil Service Get Books
    const getPosts = await instagramService.getAllPosts();

    res.send(getPosts);
};

module.exports = {
    register,
    getAll,
    login,
    postingan,
    getAllPosts
};