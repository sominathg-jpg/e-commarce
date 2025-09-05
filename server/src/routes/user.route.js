import { Router } from "express";

import {
  login,
  register,
  updateProfile,
} from "../controllers/user.controllers.js";
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.patch("/update-profile/:id", updateProfile);

export default router;
