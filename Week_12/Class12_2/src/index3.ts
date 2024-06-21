// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
        
interface User3 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps3 = Pick<User3, 'name' | 'email' | 'age'>;
type UpdatePropsOptional = Partial<UpdateProps3>;

function updateProfile3(user: UpdatePropsOptional){
    console.log(`Name: ${user.name}, Email: ${user.email}, age: ${user.age}`);
}

updateProfile3({name: 'John'});
updateProfile3({name: 'John', email: 'john@example.com'});
updateProfile3({name: 'John', email: 'john@example.com', age: 32});