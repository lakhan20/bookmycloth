import express from "express";

import {
  POSTaddAdmin,
  PUTUpdateAdminDetail,
} from "../../controllers/adminController/adminDetailController.js";
import { GETLoginAdmin } from "../../controllers/adminController/loginAdmin.js";
let adminDetailRouter = express.Router();
adminDetailRouter.post("/signup", POSTaddAdmin);
adminDetailRouter.get("/login", GETLoginAdmin);
adminDetailRouter.put("/updateProfile/:id", PUTUpdateAdminDetail);

export default adminDetailRouter;
