// types vs interfaces

// type are similar to interfaces. For type we need to specify an = sign but for interface we don't have to.
// types can not be used to implement classes. Only interfaces can be used for that.
type user1 = {
    firstname: string;
    lastname: string;
    age: number;
}


interface user2 {
    firstname: string;
    lastname: string;
    age: number;
}


// But types lets us do few other things like:

// 1) Union
// EX: Say we want to print id of a user which can be a number or a string

type GreetArg = number | string;

function greeter(id: GreetArg){
    console.log(`ID: ${id}`);
}
greeter(1);
greeter("John");


// 2) Intersection
// Ex: Say we want to create a type that has every property of multiple types/interfaces

type Employee2 = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee2 & Manager;

const teamLead: TeamLead = {
    name: "John",
    startDate: new Date(),
    department: "CSE"
};

