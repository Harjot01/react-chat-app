import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImg: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    default: "This is me",
    required: false,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const User = mongoose.model("User", userSchema);
