import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [messages, setMessages] = useState<Array<string>>([]);
  const [sendMsg, setSendMsg] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    }

    // control reach here when server sends us a message
    socket.onmessage = (message) => {
      console.log("Received message: ", message.data);
      setMessages((m) => [...m, message.data]);
    }

    // When user go to a different page. So connection should close then.
    return () => {
      socket.close();
    }
  }, [])

  // While socket connection is established, the user will see loading.
  if(!socket) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <h3 key={index}>
            {msg}
          </h3>
        ))}
      </div>

      <div>
        <input 
          type='text'
          value={sendMsg}
          onChange={(e) => setSendMsg(e.target.value)}
        />

        <button 
          onClick={() => {
            socket.send(sendMsg);
            setSendMsg("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default App