import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  totalUsersCreated: {
    type: Number,
    default: 0,
  },
  totalUsersDeleted: {
    type: Number,
    default: 0,
  },
  totalUsers: {
    type: Number,
    default: 0,
  },
  maleGender: {
    type: Number,
    default: 0,
  },
  feminineGender: {
    type: Number,
    default: 0,
  },
  otherGender: {
    type: Number,
    default: 0,
  },
});

const Data = mongoose.model("Data", DataSchema);

export default Data;
