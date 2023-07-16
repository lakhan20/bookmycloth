import express from "express";

import { POSTaddAdmin } from "../../controllers/adminController/adminDetailController.js";
import { GETLoginAdmin } from "../../controllers/adminController/loginAdmin.js";
let adminDetailRouter = express.Router();
adminDetailRouter.post("/signup", POSTaddAdmin);
adminDetailRouter.get("/login", GETLoginAdmin);

export default adminDetailRouter;
