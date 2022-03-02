const express = require('express')
const app = express()
const location=require('./router/location')
const place= require('./router/place')

require('./db')
app.use(express.json())
app.listen(3000)

app.use("/locations",location)
app.use("/places",place)
