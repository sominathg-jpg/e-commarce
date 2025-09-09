import { Router } from "express";
import multer from "multer";
const storage = multer.memoryStorage(); // Stores the file in a Buffer in memory
const upload = multer({ storage: storage });
import {
  createProduct,
  getProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const router = Router();
router.post("/add-product", upload.single("product"), createProduct);
router.get("/getproducts", getProducts);
router.get("/get-perticualar-product/:id", getProduct);
router.patch("/update-product/:id", upload.single("product"), updateProduct);
router.delete("/delete-product/:id", deleteProduct);

// in case if we want the order according to the user then here we will apply that
export default router;
