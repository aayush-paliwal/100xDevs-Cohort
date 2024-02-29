// Create an interface for a person object that contains a first name, last name, and age.

interface User{
    firstName: string;
    lastName: string;
    age: number;
    email?: string;       // optional
}

function isLegalUser(user: User){
    return user.age >= 18
}

console.log(isLegalUser({ firstName: 'Alex', lastName: 'Hales', age: 17 }));






// PROBLEM 2: Implementing interfaces in classes
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void; //giving a type to func inside interface. 
}

// classes can derive interfaces, but can't derive 'types'
// Now as Employee implements Person interface, so it will have all the properties defined in the Person interface
class Employee implements Person {

  //by default, all properties are public
  name: string;
  age: number;

  // constructor: runs everytime a new instance of the class is created
  constructor(n: string, a: number) {
    // arguments passed should be assigned to the properties, else TS throws error
    this.name = n;
    this.age = a;
  }

  // method: call it on an instance of the class to console the phrase.
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const ob1 = new Employee("John", 22);
console.log(ob1.name)
ob1.greet("Print")