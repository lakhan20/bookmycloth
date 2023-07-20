import express from "express";
import { GETAllCustomer } from "../../controllers/adminController/viewCustomerDetailController.js";

let CustomerRoutesAdmin = express.Router();

CustomerRoutesAdmin.get("/customerDetail", GETAllCustomer);

export default CustomerRoutesAdmin;
