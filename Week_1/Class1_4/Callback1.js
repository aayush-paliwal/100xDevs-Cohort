function square(n){
    return n * n
}

function cube(n){
    return n * n * n
}

function quad(n){
    return n * n * n * n
}

// Here we are repeating the same structure of code for sumOfSquares and sumOfCubes(Violating DRY) 
function sumOfSquares(a, b){
    let square1 = square(a)
    let square2 = square(b)
    return square1 + square2
}

function sumOfCubes(a, b){
    let cube1 = cube(a)
    let cube2 = cube(b)
    return cube1 + cube2
}


// It would be nice to create a generic function for the above structure of code. We will just pass the function that we want our values to be operated on as a third argument
function sumOfSomething(a, b, cb){
    let ans1 = cb(a)
    let ans2 = cb(b)
    return ans1 + ans2
}

let ans = sumOfSomething(1, 2, cube)
console.log(ans)