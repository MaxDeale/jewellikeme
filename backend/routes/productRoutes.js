import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

import Product from "../models/productModel.js";

//fetches all products from db, GET request to /api/products, publicly accesssed
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

//fetch single product, GET request to /api/products, publicly accesssed
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found...");
    }
  })
);

export default router;
