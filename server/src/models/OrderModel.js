import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    address: {
        message: {
            type: String,
        },
        zipCode: {
            type: String,
            required: true,
        }
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
