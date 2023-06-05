const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        content: {
          type: String,
          required: true,
        },
        author: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("News", newsSchema);
