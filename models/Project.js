const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    functionality: {
      type: String,
      required: true,
    },
    codeSamples: {
      type: String,
      required: true,
    },
    documentation: {
      type: String,
      required: true,
    },
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        message: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Project", projectSchema);
