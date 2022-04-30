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



module.exports = { getArgonaute }