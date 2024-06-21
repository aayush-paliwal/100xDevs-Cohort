// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// The syntax for Pick is as follows: Pick<Type, Keys>
        // Type: The original type you want to pick properties from.
        // Keys: The keys (property names) you want to pick from the Type, separated by | (the union operator).


interface User2 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UserProfile2 = Pick<User2, 'name' | 'email'>;

function showProfile2(user: UserProfile2){
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

showProfile2({name: 'John', email: 'john@example.com'});