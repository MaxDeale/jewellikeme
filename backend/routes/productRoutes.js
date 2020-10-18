import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

//fetches all products from db, GET request to /api/products, publicly accesssed
router.route("/").get(getProducts);

//fetch single product, GET request to /api/products, publicly accesssed

router.route("/:id").get(getProductById);

export default router;
