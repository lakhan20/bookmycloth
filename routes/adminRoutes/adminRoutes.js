import express from "express";

import { POSTaddAdmin } from "../../controllers/adminController/adminDetailController.js";
let adminDetailRouter = express.Router();
adminDetailRouter.post("/signup", POSTaddAdmin);

export default adminDetailRouter;
