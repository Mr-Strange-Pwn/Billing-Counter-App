const express = require('express')
var bodyParser = require('body-parser')

const router = require('./router')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json;charset=UTF-8', "text/plain", '*/*')
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})

// to connect router to app
app.use("/", router)

app.listen(3010, () => {
    console.log("server is up for billing counter at port 3010")
})