// Write a user function to create users table in your database.

import { Client } from 'pg';

const client = new Client({
    // DB connection string
    connectionString: "postgresql://levelupaayush:password@ep-sparkling-water-a5i9fsko.us-east-2.aws.neon.tech/DB?sslmode=require"
})
  

// Creating a table in DB
async function createUserTable(){
    await client.connect();
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

// createUserTable();

// Inserting data into a table
// But this one is an insecure way to store data in DB.
// When we expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to our data/delete our data.
// It is possible that the user sends something like a delete query like in the username field and this might all the data of DB.


async function insertTableData1(){
    try {
        await client.connect(); // Ensure client connection is established

        // When we do this PG will treat it like a whole query and if the user here sends query like SELECT * in username field, that will run as an sql query.
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        const res = await client.query(insertQuery);
        console.log('Insertion success:', res);     // Output insertion result
    } catch (err) {
        console.error('Error during the insertion:', err);
    } finally {
        await client.end();         // Close the client connection
    }
}

// insertTableData1();


// More secure way
// We don't paste the strings provided by the user as such in sql query
async function insertTableData2(username: string, email: string, password: string) {
    try {
      await client.connect(); // Ensure client connection is established
      // Use parameterized query to prevent SQL injection
    //   And if we do so sql will treat it like it is a value not as a query.
      const insertQuery =
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
      const values = [username, email, password];
      const res = await client.query(insertQuery, values);
      console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
      console.error('Error during the insertion:', err);
    } finally {
      await client.end(); // Close the client connection
    }
}
  
// insertTableData2('username5', 'user5@example.com', 'user_password').catch(
//     console.error
// );



// Get users from table
async function getUser(email: string){
    try {
        client.connect();
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);

        if(result.rows.length > 0){
            console.log("User found: ", result.rows[0]);    // Output user data
            return result.rows[0];
        }
        else{
            console.log('No user found with the given email.');
            return null;      // Return null if no user was found
        }
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}

// getUser('user5@example.com').catch(console.error);



async function createAddressesTable(){
    await client.connect();
    const result = await client.query(`
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
    console.log(result);
}
createAddressesTable();


