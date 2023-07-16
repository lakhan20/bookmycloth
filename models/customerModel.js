import mongoose from "mongoose";

const customer = new mongoose.Schema({
  cName: String,
  cEmail: String,
  cMobile: Number,
});
const CustomerModel = mongoose.model("Customer", customer);

export default CustomerModel;
