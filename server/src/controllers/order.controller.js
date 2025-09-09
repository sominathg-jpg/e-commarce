import Order from "../models/order.model.js";
import User from "../models/user.model.js";
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const {
      user,
      products,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (!products || products.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No products found" });
    }

    const order = new Order({
      user, // Assuming you attach logged-in user in req.user
      products,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    // Push order into user.orders
    await User.findByIdAndUpdate(id, {
      $push: { orders: createdOrder._id },
    });

    res.status(201).json({ success: true, order: createdOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all orders (admin)
// @route   GET /api/orders
// @access  Private/Admin
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email") // populate user info
      .populate({
        path: "products",
        select: "name price reviews", // populate product info
        populate: {
          path: "reviews", // nested populate reviews of product
          populate: {
            path: "user", // populate user inside each review
            select: "name email",
          },
        },
      });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found" });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Get single order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email") // populate user
      .populate({
        path: "products",
        select: "name price reviews", // select fields from Product
        populate: {
          path: "reviews",
          populate: { path: "user", select: "name email" },
        },
      });
    console.log(order);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete an order
// @route   DELETE /api/orders/:id
// @access  Private/Admin
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    await order.deleteOne();
    res.status(200).json({ success: true, message: "Order removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    // Update fields dynamically
    Object.keys(req.body).forEach((key) => {
      order[key] = req.body[key];
    });

    const updatedOrder = await order.save();
    res.status(200).json({ success: true, order: updatedOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
