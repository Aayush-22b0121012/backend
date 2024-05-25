require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' ,(req,res) =>{
    res.send("manu")
})

app.get('/login' ,(req,res)=>{
    res.send("succefully login")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})