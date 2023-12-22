// Creating asnc functions of our own
// Ugly way

const fs = require('fs');

// Providing a wrapper on top of another async function.
// We have created a function where other people can send a callback. It is good but could lead to callback hell
function reading1(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data)
    })
}

function onDone1(data){
    console.log(data)
}

reading1(onDone1)




// Cleaner way(With Promises)
function reading2(){
    // Returning an instance of a Promise
    // Promise return is a synchronous but the data of the promise comes asynchronously
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data)
        })
    })
}

function onDone2(data){
    console.log(data)
}

// Whatever we pass in resolve reaches the onDone2 function
var a = reading2()
a.then(onDone2)    // .then gets called whenever the async function resolves
console.log(a)