const express = require('express');
const app = express();

// Add following constraints to the route
// 1) User needs to send a kidneyId as a query param which should be a number from 1-2
// 2) User should send a username and password in headers

// Dumb way
app.get("/health-checkup", (req, res) => {
    const kidneyId = req.query.kidneyId;
    let username = req.headers.username;
    let password = req.headers.password;

    // Username check(Authentication)
    if(username != "kirat" || password != "pass"){
        req.status(400).json({
            "msg": "User not exist"
        })
        return       // early return
    }

    // Input validation
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            "msg": "Wrong input"
        })
        return
    }

    res.json({
        msg: "Your heart is healthy"
    });
})


// If we are told that there is another route that does kidney replacement. So for that we again need to do the above checks.(Violating DRY)
// To improve it a little bit we can create a function for user and kidney validator

function userValidator(username, password) {
    if(username != "kirat" || password != "pass"){
        return false;
    }
    return true;
}

function kidneyValidator(kidneyId){
    if(kidneyId != 1 && kidneyId != 2){
        return false;
    }
    return true
}

// But there is still a lot of code repetition
app.put("/replace-kidney", (req, res) => {
    if(!userValidator(req.headers.username, req.headers.password)){
        res.status(403).json({
            msg: "User not exist"
        })
        return 
    }

    if(!kidneyValidator(req.query.kidneyId)){
        res.status(411).json({
            msg: "Wrong Input"
        })
        return
    }

    // kidney replacement logic

    res.send("Your heart is healthy!");
})

// The most optimal solution for such cases is to make use of middleware.
// When we know we have to do some pre checks we move them at some other place and that some other place is called middleware.

app.listen(3000, () => {
    console.log("Server started..");
})