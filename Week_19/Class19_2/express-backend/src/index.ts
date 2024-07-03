import { createClient } from "redis";
import express from "express";

const app = express();
app.use(express.json());

const client = createClient();
client.on("error", (err) => console.log("Redis client error: ", err));



app.post("/submit", async (req, res) => {
    const { problemId, code, language } = req.body;
    // Push this to a DB prisma.submission.create();

    try {
        await client.lPush("problems", JSON.stringify({ problemId, code, language }));
        res.status(200).send("Submission received and stored");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
})

const startServer = async () => {
    try {
        await client.connect();
        console.log("Connected to redis server");

        app.listen(3000, () => {
            console.log("Express server started on port 3000");
        })
    } catch (error) {
        console.log("Failed to connect to Redis ", error);
    }
}

startServer();