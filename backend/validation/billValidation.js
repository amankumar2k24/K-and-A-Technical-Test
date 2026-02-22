const Joi = require("joi");

exports.billSchema = Joi.object({
    customerName: Joi.string(),
    mobileNumber: Joi.string().length(10).pattern(/^[0-9]+$/),
    address: Joi.string(),
    discount: Joi.number().min(0).max(100),
    items: Joi.array().items(
        Joi.object({
            productName: Joi.string().required("Product name is required"),
            metalType: Joi.string().valid("Gold", "Silver").required("Metal type is required"),
            weight: Joi.number().required("Weight is required"),
            quantity: Joi.number().required("Quantity is required"),
            pricePerGram: Joi.number().required("Price Per Gram is required"),
        })
    ).min(1).required("At least one item is required"),
})