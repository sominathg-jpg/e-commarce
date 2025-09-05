import { Router } from "express";
import {
  addOrder,
  cancleOrder,
  getPerticularOrder,
  grtOrders,
  updateOrder,
} from "../controllers/order.controller.js";
const router = Router();
router.get("/get-perticualar-order/:id", getPerticularOrder);
router.post("/add-order", addOrder);
router.patch("update-order/:id", updateOrder);
router.get("cancle-order/:id", cancleOrder);
router.get("/getorders", grtOrders);

// in case if we want the order according to the user then here we will apply that
export default router;
