// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")

// Writing to the file
fs.writeFile("write.txt", "Adding some data to myfile. This will remove the previous content from the file if exists. Also this will create a new file if specified file doesn't exist.", (err) => {
    if(err){
        console.log("An error occured while writing: ", err)
        return
    }
    console.log("Successfully written to file!!")
})


// Reading contents from the file
fs.readFile("write.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})