const express = require("express")
const router = express.Router()
const { getArgonaute } = require("../controllers/argonauteController")


router.get("/", getArgonaute)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})
module.exports = router