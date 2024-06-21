import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify, sign } from 'hono/jwt';
import { signinInput, signupInput } from "@100xdevs/medium-common";



export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
			message: "Inputs not correct"
		})
    }
	try {
		const user = await prisma.user.create({
			data: {
                name: body.name,
				username: body.username,
				password: body.password
			}
		});

		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });

	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up", msg: e });
	}
})


userRouter.get("/", (c) => {
	return c.json({msg: "success"});
})

userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
			message: "Inputs not correct"
		})
    }

	const user = await prisma.user.findUnique({
		where: {
			username: body.username
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})


