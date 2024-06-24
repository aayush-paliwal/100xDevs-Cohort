import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET(){
    const user = await client.user.findFirst({});

    if(!user){
        return NextResponse.json({ message: "No user found" });
    }
    return Response.json({
        name: user.username,
        email: user.username
    })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    console.log(user.id)

    return Response.json({
        message: "You are logged in!"
    })
}