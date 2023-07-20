/*


R-ReactJs   --- frontend framework --- data ---api integration - security

M-Mongodb  ---- database-NOSQL
E-ExpressJs --- node library --- utility --framework -- https --- server
N-NodeJs    --- api  

*/
//npm install express
import express from "express";
import mongoose from "mongoose";
import customerRouter from "./routes/customerRoutes/customerRoute.js";
import adminDetailRouter from "./routes/adminRoutes/adminRoutes.js";
import CustomerRoutesAdmin from "./routes/adminRoutes/customerRoutes.js";

const app = express();

app.use(express.json());

//customer routes
app.use("/", customerRouter);

//admin Routes
app.use("/admin", adminDetailRouter);
app.use("/admin", CustomerRoutesAdmin);
mongoose.connect("mongodb://127.0.0.1:27017/BookMyCloths").then(() => {
  console.log("Connected");
});

app.listen(9999, function () {
  console.log("server listen on 9999");
});
