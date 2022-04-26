const express = require("express");
const app = express();
const PORT = 2002;

app.use(express.json());


// Import Controllers
const usersController = require("./controllers/usersController");

// Define Routes
app.get("/users", usersController.getAll);
app.post("/create", usersController.create);
app.get("/users/:id", usersController.getById);
app.put("/users/:id", usersController.updateById);
app.delete("/users/:id", usersController.deleteById);
app.get("/posts", usersController.getAllPosts);
app.post("/create/posts", usersController.createByPosts);


app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});