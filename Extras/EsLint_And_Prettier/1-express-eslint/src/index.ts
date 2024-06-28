import express from "express";

const app = express();
// let x = 1;            Try removing this unused variable

// If we still want to have a variable, we can ignore eslint for a specific line.
// eslint-disable-next-line   
const y = 2;

app.get("/", (req, res) => {
    res.json({
	    message: "Hi there"
    });
});

