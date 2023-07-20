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

export const PUTUpdateAdminDetail = async (req, res) => {
  await adminDetailModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res
        .status(200)
        .json({ message: "admin detail updated successfully", data: data });
      console.log(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error occured", error: err });
    });
};
