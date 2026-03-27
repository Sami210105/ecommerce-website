const express = require("express");
const cors = request("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Latte",
      price: 150,
      image:"https://i.pinimg.com/1200x/67/5a/ce/675ace2c99404fbab403c7762effada1.jpg",
    },
    {
      id: 2,
      name: "Frappe",
      price: 180,
      image:"https://i.pinimg.com/736x/ac/fd/9c/acfd9c5c59f1ce078f20bd059f93c984.jpg",
    },
  ]);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");  
})
