import { model, Schema } from "mongoose";

import { propertyImagesLimit } from "../utils/helperFunctions.js";

const PropertySchema = new Schema(
  {
    for: {
      type: String,
      enum: ["sell", "rent"],
      default: "sell",
      required: true,
    },
    type: {
      type: String,
      enum: ["commercial", "residential"],
      default: "residential",
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: [
        propertyImagesLimit,
        "From 1 to 4 Property Images will be Accepted.",
      ],
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    rooms: {
      type: String,
      required: true,
    },
    bathrooms: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    realtor: {
      type: Schema.Types.ObjectId,
      ref: "realtors",
    },
  },
  { timestamps: true }
);

const Property = model("properties", PropertySchema);
export default Property;
