const zod = require('zod');

function validateInput(arr){
    const schema = zod.array(zod.string());
    const response = schema.safeParse(arr);

    console.log(response);
}

validateInput([1,2,3]);


// Expected input from user (Creating zod schema for it)
// {
        // email: string
        // password: atleast 8 letters
        // country: "IN", "US"
// }


function validateUser(obj){
    const schema = zod.object({
        email: zod.string().email(),             // Chaining the checks
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj)
    console.log(response);
}

validateUser({
    email: "abc@example.abc",
    password: "234683723"
})
