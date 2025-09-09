import Review from "../models/review.model.js";
import Product from "../models/product.model.js";

// ✅ Add Review for a product
export const addReview = async (req, res) => {
  try {
    const { productId } = req.params; // product id from URL
    const { user, name, rating, comment } = req.body;

    if (!rating || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "Rating and comment required" });
    }

    // Create new review
    const review = await Review.create({
      user,
      name,
      rating,
      comment,
    });

    // Optionally link review to product
    await Product.findByIdAndUpdate(productId, {
      $push: { reviews: review._id },
    });

    res.status(201).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Review
export const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;

    const review = await Review.findById(reviewId);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    review.rating = rating ?? review.rating;
    review.comment = comment ?? review.comment;

    await review.save();

    res.status(200).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Review
export const deleteReview = async (req, res) => {
  try {
    const { reviewId, productId } = req.params;

    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    // Remove from product
    await Product.findByIdAndUpdate(productId, {
      $pull: { reviews: reviewId },
    });

    res.status(200).json({ success: true, message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Like Review
export const likeReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findByIdAndUpdate(
      reviewId,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    res.status(200).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
