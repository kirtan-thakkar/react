"use client";
import { useState, useEffect } from "react";

const WebSocketPage = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080"); // you have the WebSocket nativelly same as you dont have to import fetch you can use WebSocket directly in the browser
    socket.onopen = () => {
      console.log("WebSocket connection established");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Received message from server:", message.data);
      setMessage((prevMessage) => [...prevMessage, message.data]);
    };

    return ()=>{
        socket.close();
    }
  }, []);

  if (!socket) {
    return <div>Loading socket, currently socket not found....</div>;
  }
  return (
    <div>
      <h1>Send data from the input</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        socket.send(input);
      }}>
        <input  
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a message..."
        />
        <button type="submit">Send</button>
      </form>
      <p className=" text-2xl text-center text-shadow-2xs px-4 py-10">
        {message}
      </p>
    </div>
  );
};

export default WebSocketPage;
