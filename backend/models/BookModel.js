
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      unique: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    commments: {
      type: String,
    },

    // EKLENEBİLECEKLER
    description: String,
    coverImage: String,
    isAvailable: {
      type: Boolean,
      default: true,
    },
    borrowedBy: String,
    borrowedAt: Date,
    returnedAt: Date,
    quantity: {
      type: Number,
      default: 1,
    },
    
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("BookStore", BookSchema);