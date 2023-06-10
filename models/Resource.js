const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    codeSamples: [{ type: String }],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Resource", resourceSchema);
