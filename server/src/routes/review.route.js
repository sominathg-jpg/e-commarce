import { Router } from "express";

import { addReview, deleteReview, updateReview } from "../controllers/review.controller.js";
const router = Router();

router.post("/add-product", addReview);
router.patch("update-product/:id", updateReview);
router.delete("delete-product/:id", deleteReview);

// in case if we want the order according to the user then here we will apply that
export default router;
