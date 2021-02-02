import React,{useEffect,useState} from 'react';

import './ChatPage.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function ChatPage() {

const [messages , setMessages] = useState([]);


useEffect(() => {
  axios.get('/messages/sync')
  .then(response =>{
   setMessages(response.data);
  });

},[]);



  
useEffect(() => {
  const pusher = new Pusher('0bcc8d8b06173380dabd', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) =>{
    setMessages([...messages, newMessage]);
  });

 return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };

  
}, [messages]);


console.log(messages);

  
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
   
    </div>
  );
}


export default ChatPage;