const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

mongoose.connect('mongodb://localhost:27017/wildcodeschool', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8080

const app = express()
app.use(express.json())

app.use("/", router)


app.listen(port, () => {
    console.log("Server is listening at port ", port);
})