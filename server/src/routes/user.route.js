import { Router } from "express";
import multer from "multer";

import {
  login,
  register,
  updateProfile,
} from "../controllers/user.controllers.js";
const storage = multer.memoryStorage(); // Stores the file in a Buffer in memory
const upload = multer({ storage: storage });
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.patch("/update-profile/:id", upload.single("profile"), updateProfile);

export default router;
  