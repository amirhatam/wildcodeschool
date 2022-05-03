require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const cors = require("cors")


const argonauteRoutes = require("./routes/argonauteRoute")


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wildcodeschool', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = process.env.PORT || 8080


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("./public"))


app.use("/", router)
app.use("/argonaute", argonauteRoutes)

if (process.env.NODE_ENV === 'production') {
    console.log("NODE_ENV :", process.env.NODE_ENV);
}


app.listen(port, () => {
    console.log("Server is listening at port ", port);
})