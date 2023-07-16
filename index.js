import express from "express";
import mongoose from "mongoose";
import customerRouter from "./routes/customerRoute.js";
import adminDetailRouter from "./routes/adminRoutes/adminRoutes.js";
const app = express();

app.use(express.json());

//customer routes
app.use("/", customerRouter);

//admin Routes
app.use("/admin", adminDetailRouter);

mongoose.connect("mongodb://127.0.0.1:27017/BookMyCloths").then(() => {
  console.log("Connected");
});

app.listen(9999, () => {
  console.log("server listen on 9999");
});
