const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

function findIndex(todos, id){
    for(let i=0; i<todos.length; i++){
        if(todos[i].id === id){
            return i;
        }
    }
    return -1;
}

function removeIndex(arr, index) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get("/todos", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err;

        res.json(JSON.parse(data))
    })
})

app.get("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err;
        const todoData = JSON.parse(data)
        const reqId = parseInt(req.params.id)

        const todoIndex = findIndex(todoData, reqId)
        if(todoIndex === -1){
            res.status(404).send()
        } 
        else{
            res.json(todoData[todoIndex])
        }
    })
})

app.post("/todos", (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 100000),
        title: req.body.title,
        description: req.body.description
    }

    fs.readFile("todos.json", "utf8", (err, data) => {
        if(err) throw err
        const todoData = JSON.parse(data)
        todoData.push(newTodo)

        fs.writeFile("todos.json", JSON.stringify(todoData), (err) => {
            if(err) throw err
            res.status(201).json(newTodo)
        })
    })  
})

app.put("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf8", (err, data) => {
        if(err) throw err

        const todoData = JSON.parse(data)
        const reqId = parseInt(req.params.id)
        const todoIndex = findIndex(todoData, reqId)

        if(todoIndex === -1){
            res.status(404).send()
        }
        else{
            const updatedTodo = {
                id: todoData[todoIndex].id,
                title: req.body.title,
                description: req.body.description
            }

            todoData[todoIndex] = updatedTodo

            fs.writeFile("todos.json", JSON.stringify(todoData), (err) => {
                if(err) throw err
                res.status(200).json(updatedTodo)
            })
        }
    })
})

app.delete("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err

        let todoData = JSON.parse(data)
        const todoIndex = findIndex(todoData, parseInt(req.params.id))

        if(todoIndex === -1){
            res.status(404).send()
        }
        else{
            todoData = removeIndex(todoData, todoIndex)

            fs.writeFile("todos.json", JSON.stringify(todoData), (err) => {
                if(err) throw err
                res.status(200).send()
            })
        }
    })
})

// for all other routes, return 404
app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(4000, () => {
    console.log('listening on port 4000')
})