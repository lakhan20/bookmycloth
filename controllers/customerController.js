import CustomerModel from "../models/customerModel.js";

export const CreateCustomer = async (req, res) => {
  let customer = new CustomerModel({
    cName: req.body.cName,
    cEmail: req.body.cEmail,
    cMobile: req.body.cMobile,
  });

  await customer
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Customer Added",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occured",
        error: err,
      });
    });
};
