import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Creating User
async function insertUser(username: string, password: string, firstname: string, lastname: string){
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstname,
            lastname,
        },

        // This is for what values to be returned after creating the user(res). 
        // If not provided it will return the whole set of values.
        select: { 
            id: true,
            password: true,
        }
    })
    console.log(res);
}

// console.log(insertUser("two@gmail.com", "twoPassword", "Two", "User"));


// Updating User
interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(email: string, {
    firstname,
    lastname
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firstname,
      lastname
    }
  });
  console.log(res);
}

// console.log(updateUser("one@gmail.com", {
//     firstname: "new name",
//     lastname: "singh"
// }))


// Getting user details 
async function getUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
        email
    }
  })
  console.log(user);
}

getUser("one@gmail.com");