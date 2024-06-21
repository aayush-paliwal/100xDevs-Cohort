// write a function to create a users table in your database.
import { Client } from 'pg';
 
const client = new Client({
    connectionString: "postgresql://postgres:mysecret@localhost:5430/postgres?sslmode=disable"
})
  

async function createUsersTable() {
    const res = await client.connect()
    console.log(res);
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable();


async function inserUserData(username: string, email: string, password: string){
    await client.connect();
    
    // Prone to SQL Injection
    // const result = await client.query(`
    //     INSERT INTO users (username, email, password)
    //     VALUES ('${username}', '${email}', '${password}')
    // `)

    // Right approach
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
    `, [username, email, password])

    console.log(result)
}

inserUserData("user3", "email3", "password3");