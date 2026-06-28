const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// In-memory data
let products = [
  {
    id: 1,
    name: "Apple Jam",
    description: "Made from fresh Himalayan apples",
    price: 180,
  },
  {
    id: 2,
    name: "Apricot Jam",
    description: "Sweet and natural apricot spread",
    price: 220,
  },
  {
    id: 3,
    name: "Herbal Tea",
    description: "Refreshing herbal blend",
    price: 150,
  },
];

// 1. GET all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// 2. GET single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.status(200).json(product);
});

// 3. POST new product
app.post("/api/products", (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// 4. PUT update product
app.put("/api/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  product.name = req.body.name || product.name;
  product.description =
    req.body.description || product.description;
  product.price = req.body.price || product.price;

  res.status(200).json(product);
});

// 5. DELETE product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.filter((p) => p.id !== id);

  res.status(204).send();
});

// 6. SEARCH products
app.get("/api/products/search/:keyword", (req, res) => {
  const keyword = req.params.keyword.toLowerCase();

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(keyword)
  );

  res.status(200).json(result);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});