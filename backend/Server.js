const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require('cors')
const routes = require("./routes/usersRoute.js");
const app = express();
const PORT = process.env.PORT | 5000;
app.use(express.json());
app.use(cors());
mongoose
    .connect("mongodb+srv://hafeezullah2023:hafeezullah2023@cluster0.vddszir.mongodb.net/")
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));
app.use(routes);
app.listen(PORT, () => console.log("Server running on port " + PORT));