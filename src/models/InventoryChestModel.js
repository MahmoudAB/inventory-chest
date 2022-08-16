import mongoose from "mongoose";

const Schema = mongoose.Schema

export const ItemSchema = new Schema ({
    name: String,
    quantity: Number,
    created_date: { type: Date, default: Date.now }
 });