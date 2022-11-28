const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: { type: String },
    collectionId: { type: String },
    submenu: { type: Object },
    path: { type: String },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("navigateMenu", schema);
