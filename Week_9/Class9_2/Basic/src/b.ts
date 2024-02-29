// Function arguments with a type
function greet(name: string){
    console.log("Hello! " + name);
}

greet("Script");


// Function with some return type
// 1. Here, we can also explicitly give the type of the returned value
// 2. Even, if we don't give it explicitly, it will be inferred by the compiler (known as Type Inference)
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(3,6));


function isLegal(age: number){
    return age > 18 ? true : false;
}
console.log(isLegal(2));


// Type for a function taking another function as input
function runAfter1S(fn: () => void){
    setTimeout(fn, 1000);
}

runAfter1S(function(){
    console.log("Hello! after 1s");
})