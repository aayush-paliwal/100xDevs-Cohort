const express = require('express')
const bodyParser = require('body-parser');


// Calling an express function and that will give us back an app object
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

// The callback function accepts two arguments (req, res)
// req contains all details of the request like headers, body, query params
// Do something with req 
// And we can send whatever we want like res.send or res.json 
app.get('/', (req, res) => {
    // Whenever anyone tries to hit our backend server control will reach here
    res.send("Welcome")
})

app.post("/route-handler", (req, res) => {
    console.log(req.body)

    res.json({
        name: "Aayush",
        age: 34
    })
})

app.post("/bakend-api/conversation", (req, res) => {
    const message = req.body.message
    console.log(message)

    // Some AI Model

    res.json({
        output: "2 + 2 = 4"
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})