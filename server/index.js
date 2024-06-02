const express = require('express')
const dbConnect = require('./src/db/connection')
dbConnect()
const app = express()
require('dotenv').config()

app.use(express.json())

const mongoose= require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  midName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
  password:String,
  email:String,
  
  
});
const User = mongoose.model('User', userSchema);
const port = process.env.PORT

app.post('/register', (req, res) => {
  User.create(req.body)
  res.send("ok")

})
app.get('/register', async (req, res) => {
  const data = await User.find()
  res.send(data)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})