import mongoose from "mongoose";

const Schema = mongoose.Schema

export const ChestInventorySchema = new Schema ({
    name: String,
    created_date: { type: Date, default: Date.now }
 });