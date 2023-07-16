import express from "express";
import { CreateCustomer } from "../controllers/customerController.js";
let customerRouter = express.Router();

customerRouter.post("/customerSignup", CreateCustomer);

export default customerRouter;
