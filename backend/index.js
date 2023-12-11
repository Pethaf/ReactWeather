require('dotenv').config();
const express = require("express");
const app = express();
const port = 3001; 
var cors = require('cors')
app.use(cors())

app.get("/api/weather",(req,res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.00&lon=18.33&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    .then(resp => resp.json())
    .then(res => console.log(res))
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Example app running on port ${port}`)
})