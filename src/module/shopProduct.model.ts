import { Schema, model } from "mongoose";
import { IProduct } from "./shopProduct.interface";

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  variants: [
    {
      type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

export const Product = model<IProduct>("Product", productSchema);
