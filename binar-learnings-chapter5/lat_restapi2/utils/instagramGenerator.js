// const Users = require("../repositories/instagramRepositories")
class Generator {
    static async generateID() {
        return Math.floor(100 + Math.random() * 900);
    }
}

module.exports = Generator;