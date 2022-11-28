const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: { type: String },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Size", schema);
