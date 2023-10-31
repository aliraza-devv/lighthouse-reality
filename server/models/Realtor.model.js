import { model, Schema } from "mongoose";

const RealtorSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatarImage: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360",
    },
    password: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    sold: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      enum: ["commercial", "residential"],
      default: "residential",
      required: true,
    },
    properties: [
      {
        type: Schema.Types.ObjectId,
        ref: "properties",
      },
    ],
    requests: [
      {
        name: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Realtor = model("realtors", RealtorSchema);
export default Realtor;
