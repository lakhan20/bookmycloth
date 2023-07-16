import adminDetailModel from "../../models/adminModels/adminDetailModel.js";

export const GETLoginAdmin = async (req, res) => {
  adminDetailModel
    .find({
      adminEmail: req.body.adminEmail,
      adminPassword: req.body.adminPassword,
    })
    .exec()
    .then((data) => {
      res.status(201).json({ data: data, message: "Login successful" });
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Something went wrong...!" });
    });
};
