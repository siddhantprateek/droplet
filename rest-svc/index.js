const express = require('express');
const logger = require('pino');
const cors = require('cors')
require('dotenv').config()

// app config
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
// app.use(logger()) // log requests to the console (as well as write them in a file)

app.get("/", (req, res) => {
    res.send(`Hello World!`)
})

app.listen(PORT, () => {
    console.log(`Server serving at http://localhost:${PORT}`)
})