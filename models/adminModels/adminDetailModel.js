import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  adminName: String,
  adminEmail: String,
  adminMobile: Number,
  adminPassword: String,
});

const adminDetailModel = mongoose.model("adminDetail", adminSchema);

export default adminDetailModel;
