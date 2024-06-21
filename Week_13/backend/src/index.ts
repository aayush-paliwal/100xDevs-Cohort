import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

import { cors } from 'hono/cors'

const app = new Hono<{
  // Whatever env variables we use put it inside the Bindings so that TS knows it exists.
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


export default app
