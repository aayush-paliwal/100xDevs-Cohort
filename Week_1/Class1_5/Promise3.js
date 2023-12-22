// Wrapping another async function 
function myOwnSetTimeout(fn, duration){
    // Here we are calling something that the end user give us(callback)
    setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
    console.log("Hi there!")
}, 1000)



// Using promises
function myOwnSetTimeout2(duration){
    // Instace of Promise class
    const p = new Promise(function(resolve, reject){
        // But here we are calling resolve which the promise object give us
        setTimeout(resolve, duration)
    })
    console.log(p)
    return p
}

// Here fucntion will return a promise and after the promise is returned do whatever we want
const val = myOwnSetTimeout2(1000).then(function(){
    console.log("Logging the first thing")
})

console.log(val)




// Creating a function that logs something after 1s and then waits for 2s to log another thing
// Callback hell
// setTimeout(function(){
//     console.log("Inside first timeout")
//     setTimeout(function(){
//         console.log("Inside second timeout")
//         setTimeout(function(){
//             console.log("Inside third timeout")
//         }, 3000)
//     }, 2000)
// }, 1000)


function promisifiedTimeout(duration){
    const p = new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
    return p
}

// Promise chaining
promisifiedTimeout(1000).then(function(){
    console.log("Inside first timeout")
    return promisifiedTimeout(2000)
}).then(function(){
    console.log("Inside second timeout")
    return promisifiedTimeout(3000)
}).then(function(){
    console.log("Inside third timeout")
})
