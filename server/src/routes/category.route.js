import { Router } from "express";
import multer from "multer";
const storage = multer.memoryStorage(); // Stores the file in a Buffer in memory
const upload = multer({ storage: storage });
import {
  addCategory,
    deleteCategory,
    getCategories,
    updateCategory,
} from "../controllers/category.controller.js";
const router = Router();
router.post("/add-category", upload.single("image"), addCategory);
router.get("/getcategories", getCategories);
router.patch("/update-category/:id", upload.single("image"), updateCategory);
router.delete("/delete-category/:id", deleteCategory);

// in case if we want the order according to the user then here we will apply that
export default router;
