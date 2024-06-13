
const express = require('express')
const userRoute = require('./src/routes/user')

const dbConnect = require('./src/db/connection')
const cors = require('cors');

dbConnect()
const app = express()
app.use(cors())
require('dotenv').config();
app.use(express.json())


app.use(userRoute)
const port = process.env.PORT || 5000



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})