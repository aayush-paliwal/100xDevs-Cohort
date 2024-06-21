"use strict";
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
function updateProfile3(user) {
    console.log(`Name: ${user.name}, Email: ${user.email}, age: ${user.age}`);
}
updateProfile3({ name: 'John' });
updateProfile3({ name: 'John', email: 'john@example.com' });
updateProfile3({ name: 'John', email: 'john@example.com', age: 32 });
