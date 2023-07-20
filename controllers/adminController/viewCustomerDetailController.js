import CustomerModel from "../../models/customerModels/customerModel.js";

export const GETAllCustomer = async (req, res) => {
  console.log("inside get all customer");

  await CustomerModel.find()
    .exec()
    .then((data) => {
      res.status(201).json({ message: "All customer collected", data: data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error occured", error: err });
    });
};
