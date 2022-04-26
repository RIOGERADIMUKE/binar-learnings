const { users } = require("../models")

class usersRepository {
    static async getAll() {
        const getUsers = users.findAll();
    
        return getUsers;
      }

//   static async create({ name, email }) {
//     // const generatedID = await generator.generateID();

//     // booksData.push({ id: generatedID, name, email });

//     // return { id: generatedID, title, author, price };
//   }
}

module.exports = usersRepository;
