import express from "express";
import Product from "../models/productModal.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  // await Product.remove({});
  // await User.remove({});
  const createdProducts = await Product.insertMany(data.products);
  // const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts });
});

export default seedRouter;
