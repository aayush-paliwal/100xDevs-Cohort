"use server";
import client from "@/db"


export async function createUser(username: string, password: string){
    const user = await client.user.create({
        data: {
            username,
            password
        }
    })

    return { message: "Signed Up!", email: user.username };
}

export async function getUser(){
    try {
        const user = await client.user.findFirst({});
        if (!user) return { message: 'No user found' };
        return { name: user?.username, email: user?.username };
    } catch (error) {
        console.log(error);
    }
}