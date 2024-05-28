const express = require('express')
const app = express()
const port = 5000

app.get('/ra', (req, res) => {
  res.send({
    name:"ramesh",
    rent: 5000,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})