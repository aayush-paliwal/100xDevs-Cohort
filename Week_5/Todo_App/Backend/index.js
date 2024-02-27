const express = require('express');
const {createTodo, updateTodo} = require("./types");
const { Todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
    const todos = await Todo.find({});
    res.json({
        todos: todos
    });
})

app.post("/todo", async (req, res) => {
    const todoBody = req.body;
    const checkBody = createTodo.safeParse(todoBody);

    if(!checkBody.success){
        return res.status(411).json({msg: "Wrong inputs"});
    }

    const todo = await Todo.create({
        title: todoBody.title,
        description: todoBody.description,
        completed: false
    })

    res.json({msg: "Todo created", todo: todo});
})

app.put("/completed", async (req, res) => {
    const updatetodoBody = req.body;
    const checkupdateBody = updateTodo.safeParse(updatetodoBody);

    if(!checkupdateBody.success){
        return res.status(411).json({msg: "Wrong inputs"});
    }

    const todoToUpdate = await Todo.findByIdAndUpdate(req.body.id, {
        completed: true
    })

    res.json({msg: "Todo marked as completed"});
})

const Port = 3000;
app.listen(Port, () => {
    console.log("Server started!");
});