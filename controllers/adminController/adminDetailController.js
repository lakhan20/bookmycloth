import adminDetailModel from "../../models/adminModels/adminDetailModel.js";

export const POSTaddAdmin = async (req, res) => {
  let admin = new adminDetailModel({
    adminName: req.body.adminName,
    adminEmail: req.body.adminEmail,
    adminMobile: req.body.adminMobile,
    adminPassword: req.body.adminPassword,
  });
  await admin
    .save()
    .then((data) => {
      res.status(201).json({
        message: "admin created successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        err: err,
      });
    });
};
