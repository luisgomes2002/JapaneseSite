import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
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
  follows: {
    type: Array,
    required: true,
  },
  followed: {
    type: Array,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  fullPermission: {
    type: Boolean,
    default: false,
    require: true,
  }
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;