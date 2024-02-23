// Using middlelware to solve the problem
const express = require('express');
const app = express();


function userMiddlware(req, res, next) {
    if(username != "kirat" || password != "pass"){
        res.status(403).json({
            msg: "Incorrect input"
        })
    }
    else{
        next()
    }
}

function kidneyMiddlware(req, res, next) {
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect input"
        })
    }else{
        next()
    }
}


// When someone hits this route first do userMiddlware check then do kidneyMiddlware check and then handle the request
// So these are kind of prechecks before the final function is called.
app.get("/health-checkup", userMiddlware, kidneyMiddlware, (req, res) => {
    // Do something
    res.send("Your health is healthy")
});

// If we know that a middleware needs to be called for every we can omit it writing for every route.
// But it is valid for all the routes that are below app.use(middleware). Means any route that comes after this will have this middleware
app.use(userMiddlware)
app.get("/kidney-check", userMiddlware, kidneyMiddlware, (req, res) => {
    // Do something
    res.send("Your kidney is healthy")
})

app.get("/heart-check", userMiddlware, (req, res) => {
    // Do something
    res.send("Your heart is healthy")
})

app.listen(3000, () => {
    console.log("Server started..");
})