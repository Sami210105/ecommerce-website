const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("MongoDB connected 😌"))
  .catch((err) => console.log(err));
