const express = require("express")
const router = express.Router()
const { getArgonaute, addArgonaute, deleteArgonaute } = require("../controllers/argonauteController")


router.get("/", getArgonaute)
router.post("/add", addArgonaute)
router.delete("/:id/delete-argonaute", deleteArgonaute)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})
module.exports = router