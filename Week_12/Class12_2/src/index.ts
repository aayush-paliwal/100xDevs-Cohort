interface User1 {
    name: string
    age: number
}

function sumOfAge1(user1: User1, user2: User1){
    return user1.age + user2.age
}

const age = sumOfAge1({name: 'John', age: 34}, {name: "Doe", age: 24});
console.log(age);