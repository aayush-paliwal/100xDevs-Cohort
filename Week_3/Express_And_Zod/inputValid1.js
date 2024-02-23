const express = require('express');
const app = express();

// Here express.json middleware uses brackets because express.json() returns us a function which is then used there.
app.use(express.json());

app.post("/health-checkup", (req, res) => {
    // Here we expect an array from user. But user can hit our server with any type of input.
    // So it is our responsibility to do input validation to prevent server crash
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys")
})


// Error handling middleware: global catches
// It is another middleware which we put at the end. It takes 4 inputs
// If there is an exception above in any of the routes, then this one will be called
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something up with our server"
    })

    // Here next is for multiple errors handling middleware
})


app.listen(3000, () => {
    console.log("Started...")
})