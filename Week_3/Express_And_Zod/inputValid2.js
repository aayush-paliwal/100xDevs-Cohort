const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

const schema = zod.array(zod.number())


const schema2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    county: zod.literal("IN").or(zod.literal("US"))
})


app.post("/health", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    // console.log(response)

    if(!response.success){
        res.status(411).json({
            msg: "Invalid input"
        })
    }
    else{
        res.send({
            response
        })
    }
})


app.listen(4000, () => {
    console.log("Started...")
})