const express = require("express");
const app = express();
const PORT = 2001;

app.use(express.json());

// Import Controllers
const instagramController = require("./controllers/instagramController");

// import Middlewares
const { authenticate } = require("./middlewares/authentication");

// Define Routes
app.get("/getAll", instagramController.getAll);
app.post("/register", instagramController.register);
app.get("/login", instagramController.login);
app.get("/Posts", instagramController.getAllPosts);
app.post("/Posts", authenticate, instagramController.postingan);




app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});