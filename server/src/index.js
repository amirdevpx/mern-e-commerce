import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoryRoutes);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || "Something went wrong",
      status: err.status || 500,
    },
    success: false,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log("Listening on port");
  db();
});
