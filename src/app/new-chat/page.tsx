'use client';

import React, { useState } from 'react'
import Markdown from 'react-markdown';

//When clicked we are probably going to want to have a unique id for each chat. So in the url we can have the unique id. This will be used to fetch the chat history.
//Each user will have an unique id so also factor that in. Can be kind of like a foriegn key.

// ***** Chat Area *****
// It will display messages
// Can likely be broken down into a  Message Component & Message List Compoent
// Where each message is conditionally rendered based on whether it is sent or received/ its from the user or the chat bot

// We need way to send messages from us. This be a input field and a button to send the message. Not sure it if it should be mini form or just a button with an on-click function.

// We need a way to receive messages. This will be done through the chat bot. The chat bot will send messages to the chat area.

// message model will be thought more with implementation of backend with mongoDB. For now we can just have a message interface. This avoids errors with typescript.
interface Message {
  from: string;
  text: string;
}


function NewChat() {
  // state to store messages and user input
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sendMessage = async () => {
    if (input.trim() === '') return;
    setIsLoading(true); // Set loading state
    const userMessage = { from: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { from: 'bot', text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with the backend:', error);
      setMessages((prevMessages) => [...prevMessages, { from: 'bot', text: 'Error: Unable to get a response' }]);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className='h-full flex flex-col'>
      <h1 className='text-2xl'>New Chat</h1>

      {/* Messages Area */}
      <div className='overflow-y-scroll'>
        {/* Messages render here */}
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 ${msg.from === 'user' ? 'text-right bg-blue-200' : 'text-left bg-gray-200'}`}>
            <Markdown>{msg.text}</Markdown>
          </div>
        ))}
        {isLoading && <div className="text-gray-500 italic">Bot is typing...</div>}
      </div>
      {/* User messages sent here */}
      <div className='flex p-4'>
        <input
          className='flex-grow'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a message'
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className='border border-black'>Send</button>
      </div>
    </div>
  )
}

export default NewChat