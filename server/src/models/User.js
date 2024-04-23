import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  fullPermission: {
    type: Boolean,
    default: false,
  },
  points: {
    type: Number,
    default: 0,
  },
  follows: {
    type: Array,
  },
  followed: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  about: {
    type: String,
  },
  backgroundColor: {
    type: String,
    default: "#121214",
  },
  jlptLevel: {
    type: String,
  },
  notification: {
    type: Array,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;
