const argonauteModel = require("../model/argonaute")


const getArgonaute = async (req, res) => {
    try {
        const users = await argonauteModel.find()

        console.log("users", users);
        res.json(users)

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}



module.exports = { getArgonaute }