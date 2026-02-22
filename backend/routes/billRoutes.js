const express = require("express")
const { createBill, getAllBills, getBillById } = require("../controller/bill");
const validate = require("../middleware/validate");
const { billSchema } = require("../validation/billValidation");

const router = express.Router()

router.post("/", validate(billSchema), createBill);
router.get("/", getAllBills);
router.get("/:id", getBillById);

module.exports = router;
