const express = require("express");
const app = express();
const PORT = 2001;

app.use(express.json());


const usersController = require("./controllers/usersController");


app.get("/users", usersController.getAll);
// app.post("/users", usersController.create);

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});