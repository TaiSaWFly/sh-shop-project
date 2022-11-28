const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: { type: String },
    collectionId: {
      type: Schema.Types.String,
      ref: "Collection",
    },
    categories: [
      {
        type: Schema.Types.String,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("CollectionCategory", schema);
