// Synchronous function
function findSum1(n){
    let res = 0
    for(let i = 0; i<n; i++){
        res += i
    }

    return res
}

console.log(findSum1(100))



// Making function async using setTimeout
// setTimeout will allow you to run the function after some duration

function findSum2(n){
    let res = 0
    for(let i = 0; i<n; i++){
        res += i
    }

    return res
}

function findSumTill100(){
    console.log(findSum2(100))
}

// When the JS thread reach here it will not wait for 1 second and move on to the next line and making it async
setTimeout(findSumTill100, 1000)
for(let i = 0; i<5; i++){
    console.log("Running.." + i)
}
console.log("Finished!!")




