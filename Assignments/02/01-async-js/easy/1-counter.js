// Create a counter in JavaScript

let a = 0;

const counter1 = setInterval(() => {
    console.log(a++)
    
    if(a == 5){
        clearInterval(counter1)
    }
}, 1000)


