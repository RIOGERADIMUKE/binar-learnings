const generator = require("../utils/instagramGenerator")

let Posts = [  {
    id: 987637,
    user_id: "rio1",
    title: "Penulis 1",
    description : "teman saya pertama",
  },
  { id: 357238, 
    user_id: "kevin1", 
    title: "Penulis 3", 
    description: "teman saya ke 2" 
},
  {
    id: 157382,
    user_id: "mitchel1",
    title: "Penulis 3",
    description: "teman saya ketiga",
  },
];

let Users = [
    {
        id: 100,
        name: "rio1",
        email: "rio@gmail.com",
        password : "rio01",
        token: ""
      },
      { id: 200, 
        name: "kevin1", 
        email: "kevin@gmail.com", 
        password: "kevin02" ,
        token: ""
    },
      {
        id: 300,
        name: "mitchel1",
        email: "mitchel@gmail,com",
        password: "mitchel03",
        token: ""
      },
];

class instagramRepository {
    static async getAll() {
        return Users;
    }

    static async getAllPosts() {
        return Posts;
    }

    static async register({
        name,
        email,
        password
    }) {
        const generatedID = await generator.generateID();

        if (Users.find((user) => user.email === email)) {

            return `${email} allready registered`;
        }

        Users.push({
            id: generatedID,
            name,
            email,
            password
        });

        return {
            id: generatedID,
            name,
            email,
            password
        };
    }

    static async login({
        email,
        password
    }) {
        const filterUsersByQuery = Users.filter((a) => {
            if (a.email != email || a.password != password) {
                return {
                    Message: "incorrect email and password"
                };
            }
            a.token = `${a.id}-${a.email}`
            return a;
        });
        return filterUsersByQuery;
    }

    static async postingan({
        user_id,
        title,
        description
    }) {
        const generatedID = await generator.generateID();

        Posts.push({
            id: generatedID,
            user_id,
            title,
            description
        });

        return {
            id: generatedID,
            user_id,
            title,
            description
        };
    }


}

module.exports = instagramRepository;