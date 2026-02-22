const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    productName: { type: String, default: null },
    metalType: {
        type: String,
        enum: ["Gold", "Silver"],
        default: "Gold"
    },
    weight: { type: Number, default: null },
    quantity: { type: Number, default: null },
    pricePerGram: { type: Number, default: null },
    itemAmount: { type: Number, default: null },
}, { timestamps: true, versionKey: false })

const billSchema = new mongoose.Schema({
    billNumber: { type: String, default: null },
    discount: { type: Number, default: 0 },
    customerName: { type: String, default: null },
    mobileNumber: { type: String, default: null },
    address: { type: String, default: null },
    items: [itemSchema],
    totalAmount: { type: Number, default: null }
})

module.exports = mongoose.model("Bill", billSchema);