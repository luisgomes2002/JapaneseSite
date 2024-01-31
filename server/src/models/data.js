import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  totalUsersCreated: {},
  totalUsersDeleted: {},
});

const Data = mongoose.model("Data", DataSchema);

export default Data;
