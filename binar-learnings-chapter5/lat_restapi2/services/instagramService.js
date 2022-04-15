const instagramRepository = require("../repositories/instagramRepositories");

class instagramService {
    static async register({
        name,
        email,
        password
    }) {
        const registerUsers = await instagramRepository.register({
            name,
            email,
            password
        });

        return registerUsers;
    }

    static async login({
        email,
        password
    }) {
        const loginUser = await instagramRepository.login({
            email,
            password,
        });

        return loginUser;
    }

    static async getAll() {
        // Manggil repo get all books
        const getUsers = await instagramRepository.getAll();

        return getUsers;
    }

    static async getAllPosts() {
        // Manggil repo get all books
        const getPosts = await instagramRepository.getAllPosts();

        return getPosts;
    }

    static async postingan({
        user_id,
        title,
        description
    }) {
        const postingan = await instagramRepository.postingan({
            user_id,
            title,
            description
        });

        return postingan;
    }

}

module.exports = instagramService;