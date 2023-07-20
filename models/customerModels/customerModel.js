import mongoose from "mongoose";

const customer = new mongoose.Schema({
  cName: String,
  cEmail: String,
  cMobile: Number,
  cPassword: String,
  cGst_num: String,
  cMobile_num: String,
  cAddress: String,
});
const CustomerModel = mongoose.model("Customer", customer);

export default CustomerModel;
