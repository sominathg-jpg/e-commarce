import { Router } from "express";
import {
  addReview,
  deleteReview,
  updateReview,
  likeReview,
} from "../controllers/review.controller.js";
const router = Router();

// ProductId is in URL for adding / deleting review
router.post("/:productId/reviews", addReview);
router.patch("/reviews/:reviewId", updateReview);
router.delete("/:productId/reviews/:reviewId", deleteReview);
router.patch("/reviews/:reviewId/like", likeReview);

// in case if we want the order according to the user then here we will apply that
export default router;
