require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");

const Products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookieParser());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
});


 DefaultData();

