const express = require('express')

const app = express()

const db= require('./dbConnection')

const router = require('./Routes')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const cors = require('cors')
app.use(cors())


app.use(express.static(`${__dirname}/upload`));

app.use('/',router)


app.listen(3000, ()=>{
    console.log("Server Started")
})






