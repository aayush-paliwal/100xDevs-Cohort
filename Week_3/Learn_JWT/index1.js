const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456"

const app = express();
app.use(express.json())

// Assignment: A website with two endpoint
// 1) POST /signin: User will send a body with username and password. Return a json web token with encrypted username
// 2) GET /users: It expects an authorization header and return an array of all users if user is signed in(token is correct). Return 403 status code if not.


// In memory DB
const ALL_USERS = [
    {
        username: "kirat@gmail.com",
        password: "123",
        name: "kirat singh"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh"
    },
    {
        username: "aman@gmail.com",
        password: "123",
        name: "Aman singh"
    }
]

function userExists(username, password){
    // Logic to return true/false if this user exists in ALL_USERS array
    let userExist = false;
    ALL_USERS.forEach((user) => {
        if((user.username == username) && (user.password == password)){
            userExist = true;
            return
        }
    })
    return userExist;
}


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist in our memory db"
        });
    }

    // Creating a token
    var token = jwt.sign({username: username}, jwtPassword);

    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try{
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username

        // Return list of users other than username
        res.json({users: ALL_USERS.filter((user) => {
            if(user.username == username){
                return false
            }
            else{
                return true
            }
        })})
    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
});

app.listen(3000, () => {
    console.log("Server started..")
})
