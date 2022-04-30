const express = require("express")
const router = express.Router()
const { getArgonaute } = require("../controllers/authController")


router.get("/argonaute", getArgonaute)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})
module.exports = router