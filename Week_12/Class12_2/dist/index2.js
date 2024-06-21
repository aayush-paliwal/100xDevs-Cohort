"use strict";
// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// The syntax for Pick is as follows: Pick<Type, Keys>
// Type: The original type you want to pick properties from.
// Keys: The keys (property names) you want to pick from the Type, separated by | (the union operator).
function showProfile2(user) {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}
showProfile2({ name: 'John', email: 'john@example.com' });
