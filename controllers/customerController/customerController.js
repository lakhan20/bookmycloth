import CustomerModel from "../../models/customerModels/customerModel.js";

export const CreateCustomer = async (req, res) => {
  let customer = new CustomerModel(req.body);

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
