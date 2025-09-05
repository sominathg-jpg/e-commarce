import { Router } from "express";

import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const router = Router();
router.get("/get-perticualar-product/:id", getProduct);
router.post("/add-product", addProduct);
router.patch("update-product/:id", updateProduct);
router.delete("delete-product/:id", deleteProduct);
router.get("/getproducts", getProducts);

// in case if we want the order according to the user then here we will apply that
export default router;
