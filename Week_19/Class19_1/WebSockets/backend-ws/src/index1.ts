// Node.js implementation

import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

const wss = new WebSocketServer({ server });
let clientCount = 0;

wss.on('connection', function connection(ws) {
  ws.on('error', (err) => console.error(err));

  ws.on('message', function message(data, isBinary) {
    // For every client connected to the server, the server sends the message to all the clients
    wss.clients.forEach(function each(client) {
        // For every client if socket connection is open because a lot of time it takes time for a socket connection to open, a lot of time they might drop off.
        // This will throw an error. So we need to make sure that the connection is actually open.  
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  console.log("Client count is: ", ++clientCount)
// As soon as the user connects, send them hello
  ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
