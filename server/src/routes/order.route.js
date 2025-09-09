import express from "express";
import {
  addOrder,
  getOrders,
  getOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

// Create a new order (only logged-in users)
router.post("/add-order", addOrder);

// Get all orders (admin only)
router.get("/get-orders", getOrders);

// Get a single order by ID (logged-in user can see their own, admin can see all)
router.get("/get-order/:id", getOrder);

// Update an order (admin only, e.g., update status)
router.patch("/update-order/:id", updateOrder);

// Delete an order (admin only)
router.delete("/delete-order/:id", deleteOrder);

export default router;
