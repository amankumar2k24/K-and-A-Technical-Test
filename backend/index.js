const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const billRoutes = require('./routes/billRoutes')

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

mongoose.connect(MONGO_DB_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
})

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/bills", billRoutes)

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Server health is green and running"
    })
})

app.listen(PORT, () => {
    console.log(`SERVER is running on PORT ${PORT}`)
})