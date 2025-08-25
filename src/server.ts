import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import config from "./config/index"


const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send({success: true, message: "Server is running"})
})

app.listen(config.port, () => {
    console.log("Server is running on port 3000")
});


async function server() {
    try {
        await mongoose.connect(config.mongoUri!)



        console.log(`MongoDB connected: ${mongoose.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

server();