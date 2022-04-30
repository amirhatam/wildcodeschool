const mongoose = require("mongoose")

const argonauteSchema = new mongoose.Schema({
    argonaute: { type: String, required: true },
    created: { type: Date, default: Date.now }
})

const argonauteModel = mongoose.model("Argonaute", argonauteSchema)

module.exports = argonauteModel
