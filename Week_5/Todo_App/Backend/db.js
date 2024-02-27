const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/harkiratDataBase")
.then(() => console.log("Connected DB!"));

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,  
    }
})

const Todo = mongoose.model('Todos', todoSchema);
module.exports = { Todo };