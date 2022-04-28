const express = require("express");
const app = express();
const PORT = 2000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controllers
const authController = require("./controllers/authController");
const productsController = require("./controllers/productsController");
const shopsController = require("./controllers/shopsController");

// // import middlewares
const { authenticate } = require("./middleware/auth");

// Define Routes auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);

// // define routes posts
app.post("/products", authenticate, productsController.create);
app.delete("/products/:id", authenticate, productsController.deleted);
app.put("/products/:id", authenticate, productsController.updated);
app.get("/shops/:id/products", shopsController.getProducts);
app.put("/shops/:id", authenticate, shopsController.updateShops);

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});