// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was: ```hello     world    my    name   is       raman```
// After the program runs, the output should be: ```hello world my name is raman```


const fs = require("fs")

fs.readFile("file.txt", "utf8", (err, data) => {
    if(err){
        console.log("An error occurred in reading: " + err)
        return
    }
    let newText = data.replace(/\s+/g, " ")


    // Cleaning the original file
    fs.writeFile("file.txt", newText, (err) => {
        if(err){
            console.log("An error occured in writing to file: " + err)
            return
        }
        console.log("Successfully cleaned the file!!")
    })
})
