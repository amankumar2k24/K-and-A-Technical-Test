const bill = require("../model/bill");

exports.createBill = async (req, res) => {

    try {
        const { customerName, mobileNumber, address, items, discount = 0 } = req.body;

        let totalAmount = 0;
        const updatedItems = items.map(item => {
            const itemAmount =
                item.weight * item.pricePerGram * item.quantity;

            totalAmount += itemAmount;

            return { ...item, itemAmount }
        })

        const generatedBillNo = "BILL-" + Date.now()
        const billResponse = await bill.create({
            billNumber: generatedBillNo,
            customerName,
            mobileNumber,
            address,
            items: updatedItems,
            discount,
            totalAmount
        })

        if (!bill) {
            return res.status(400).json({ message: "Bill creation failed", status: false })
        }

        return res.status(201).json({ message: " Bill created successfully", status: true, response: billResponse })

    } catch (error) {
        console.log("error from createBill Api==>", error)
        res.status(500).json({ message: "Internal Server Error", status: false, error: error.message })
    }
}

exports.getAllBills = async (req, res) => {

    try {
        const getBills = await bill.find().sort({ createdAt: -1 })
        if (!getBills) {
            return res.status(404).json({ message: "No bills found", status: false })
        }

        return res.status(200).json({ message: "Bills fetched successfully", status: true, response: getBills })

    } catch (error) {
        console.log("error from getBill Api==>", error)
        res.status(500).json({ message: "Internal Server Error", status: false, error: error.message })
    }
}

exports.getBillById = async (req, res) => {

    try {
        const getBill = await bill.findById(req.params.id)
        if (!getBill) {
            return res.status(404).json({ message: "No bill found", status: false })
        }

        return res.status(200).json({ message: "Bill fetched successfully", status: true, response: getBill })

    } catch (error) {
        console.log("error from getSingleBill Api==>", error)
        res.status(500).json({ message: "Internal Server Error", status: false, error: error.message })
    }
}