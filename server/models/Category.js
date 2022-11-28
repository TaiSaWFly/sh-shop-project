const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: { type: String },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", schema);
