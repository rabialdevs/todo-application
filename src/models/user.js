import mongoose from "mongoose";
import { Schema } from "mongoose";
// TODO:1 creating schema 2.model
const userSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  about: String,
  profileUrl: String,
  
});

export const User =mongoose.models.users|| mongoose.model("users", userSchema);
