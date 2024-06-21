import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstname: string, lastname: string){
    const res = await prisma.user.create({
        data: {
            email,
            firstname,
            lastname,
            password
        }
    })

    return res;
}

const result = insertUser("five@gmail.com", "fivePassword", "Five", "Last");
// console.log(result);



// Create todo
async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);
}

// createTodo(10, "Todo1", "Description1");



// getTodos
async function getTodos(userId: number) {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
  console.log(todos);
}

// getTodos(1);


// getTodosAndUserDetails
async function getTodosAndUserDetails(userId: number) {
    const todos = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
      select: {
        title: true,
        description: true,
        done: true,
        user: {
          select: {
            email: true,
            firstname: true,
            lastname: true
          }
        }
      }
    });
    console.log(todos);
}
  
// getTodosAndUserDetails(1);

