const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/harkiratDataBase")
.then(() => console.log("DB connected"))

// Defining user schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}) 

// Creating a model
const User = mongoose.model('user', userSchema);

const app = express();
const jwtPassword = "12345";

app.use(express.json());

async function verifyUser(username, password) {
    const user = await User.findOne({ username: username, password: password});
    console.log(user);
    if(user){
        return true;
    }
    return false;
}

app.post("/signup", async (req, res) => {
    const { name, username, password } = req.body;
    await User.create({name: name, username: username, password: password});

    res.json({msg: "User created"})
})

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const isUserVerified = await verifyUser(username, password);
    if(!isUserVerified){
        return res.status(404).json({msg: "Invalid username or password"});
    }
    else{
        const token = jwt.sign({username: username}, jwtPassword);
        res.status(200).json({token});
    }
})

app.get("/users", async (req, res) => {
    const token = req.headers.authorization;

    try {
        const verifyToken = jwt.verify(token, jwtPassword);
        return res.json({users: await User.find({})});
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
})

app.listen(3000, () => {
    console.log("Server started fine!!")
})