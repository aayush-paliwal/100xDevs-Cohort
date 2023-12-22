// fs is a node js library that allows us to perform various tasks on the file(reading, writing)
const fs = require('fs');

// fs.readFile(filename, encoding, annonymous function(err, data)[where we first get the error and then data])
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("Reading..")
// In JS if a thread is busy somewhere and even though a callback has resolved and ideally thread should reach there but it will remain busy at the below code until it becomes idle.
let a = 0
for(let i=0; i<100000; i++){
    a++
}
console.log("...")

// NOTE: If the code below the readfile is dependent ont the result of readfile then such code should be placed inside the callback
