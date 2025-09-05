import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/config/db.js";
import userRoute from "./src/routes/user.route.js";
import reviewRoute from "./src/routes/review.route.js";
import productRoute from "./src/routes/product.route.js";
import orderRoute from "./src/routes/order.route.js";
const app = express();

app.use(cors());
app.use(express.json());

//routes

app.use("/api/auth", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/product", productRoute);
app.use("/api/review", reviewRoute);
app.listen(process.env.PORT, () => {
  connectDb();

  console.log(
    `server is started on the port http://localhost:${process.env.PORT}`
  );
});
