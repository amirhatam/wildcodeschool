const argonauteModel = require("../model/argonaute")


const getArgonaute = async (req, res) => {
    try {
        const argonautes = await argonauteModel.find()

        console.log("argonautes", argonautes);
        res.json(argonautes)

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const addArgonaute = async (req, res) => {
    try {
        const newArgonaute = req.body

        const addArgonaute = await argonauteModel.create(newArgonaute)

        res.json({ message: "Argonaute was created!", addArgonaute })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const deleteArgonaute = async (req, res) => {
    try {
        const IdArgonaute = req.params.id
        const argonauteDelete = await argonauteModel.deleteOne({ _id: IdArgonaute })

        console.log("delete Argonaute", argonauteDelete)
        res.json({ message: "Argonaute was deleted", argonauteDelete })
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: "There was a problem :(" })
    }
}

module.exports = { getArgonaute, addArgonaute, deleteArgonaute }