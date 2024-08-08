const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json()); // to parse JSON bodies

app.use(
  cors({
    origin: "http://localhost:3000", // allow your client app
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allowed methods
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"], // allowed headers
    credentials: true, // if you need to send cookies or other credentials
  })
);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Middleware to handle OPTIONS requests
app.options("*", cors());

app.use('/api/users', userRoutes); 
app.use('/api/products', productRoutes); 
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});