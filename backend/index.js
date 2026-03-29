const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product"); 

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 😌"))
  .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// products route
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});