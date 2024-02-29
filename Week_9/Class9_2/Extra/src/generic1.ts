// Let’s say we want a function that return the first element of an array. Array can be of type either string or integer.

type Input = number | string;
function firstEle(arr: Input[]){
    return arr[0];
}

// console.log(firstEle(["enum", "string"]).toUpperCase());    // Error, because toUpperCase don't exists for numbers

// The problem with below approach is user can send different types of values in inputs, without any type errors
console.log(firstEle(["enum", "string", 1]));   




// ReSolving the problems with generics

function giveFirstEle<T>(arr: T[]) {
    return arr[0];
}

const ele1 = giveFirstEle<string>(["enum", "string"]);
console.log(ele1.toUpperCase());

const ele2 = giveFirstEle<number>([1, 4, 2]);
console.log(ele2);

console.log(giveFirstEle([100, 5, "asd", "wer", 6]));


interface User {
    name: string;
};
console.log(giveFirstEle<User>([{name: "Harkirat"}, {name: "TypeScript"}]));

