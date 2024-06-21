"use strict";
function sumOfAge1(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge1({ name: 'John', age: 34 }, { name: "Doe", age: 24 });
console.log(age);
