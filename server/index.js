const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const cors = require('cors')


const dbConnect = require('./src/db/connection')
dbConnect()
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

const mongoose= require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  midName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
  email:String,
  password:String,
  role: {
    type: String,
    enum : ['admin','user'],
    default: 'user'
  },
  
  
});
const User = mongoose.model('User', userSchema);
const port = process.env.PORT || 5000

app.post('/register', async (req, res) => {


const hashPassword= await bcrypt.hash(req.body.password, saltRounds)
console.log(hashPassword)
req.body.password= hashPassword
  const phoneExist = await User.exists({phoneNumber: req.body.phoneNumber})
  const emailExist = await User.exists({email: req.body.email})
  
  if(phoneExist){
    return res.json({msg: "PhoneNumber is already exist"})
    }
    else if(emailExist){
      return res.json({msg: "Email is already exist!!"})
    }

  await User.create(req.body)
  return res.json({msg: "user registered"})

})
 app.post('/login', async (req, res) => {
  console.log(req.body)
  const user = await User.findOne({phoneNumber: req.body.phoneNumber})
  const usermail = await User.findOne({email: req.body.email})

  if(user){
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    
    if(isMatched){

      const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, '1353b15b50711cb8558776fb3c07c99848d680b2a2de8593523170a9429fdea7b49added448ab339a848fe7341017e36a3db09a1e78a7ba50ff37b7aa8790a22');



      res.json({msg: "LogIn successful !!",token})

    }else {
      res.json({msg: "Invalid Password !!"})

    }

  }else{
    res.json({msg: "Phone number not register!!"})
  }
  
  // await User.create(req.body)
  //  return res.json({msg: "user loggedIn"})

  })

app.get('/users',async(req,res)=>{
  const data = await User.find()
  res.json(data)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})