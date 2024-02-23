const express = require('express')
const app = express()


let numOfRequests = 0
function calculateRequests(req, res, next){
    numOfRequests++;
    console.log(numOfRequests)
    next()
}

// app.use takes a middleware as an input. Ex: app.use(express.json())
app.use(calculateRequests)

app.get("/", (req, res) => {
    res.json({
        msg: "Hlo here"
    })
})

app.get("/app", (req, res) => {
    res.json({
        msg: "App page"
    })
})

app.listen(3000, () => {
    console.log("Started..")
})