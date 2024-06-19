export interface Env {

}

// export default {
// 	// It is just a simple route, means anytime someone visits the website control should reach here and we will return "Hello world!"
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		// Returning simple text
// 		return new Response('Hello World!');
// 	},
// };


// We can see that even for a simple routing the code is looking very untidy.
export default {
	// This request object gives access to body, headers, request method.
	async fetch(request: Request, env: Env, ctx: ExecutionContext) : Promise<Response> {
		// console.log(request.headers);
		// console.log(request.body);
		// console.log(request.method);

		if(request.method === 'GET'){
			return Response.json({
				message: "You sent a GET request"
			});
		}
		else{
			return Response.json({
				message: "You did not send a get request"
			});
		}
	}
}