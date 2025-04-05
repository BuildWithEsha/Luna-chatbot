import React, { useRef, useState, useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { MessageBubble } from './MessageBubble'; 


export const Interface = () => {
  const messagesEndRef = useRef(null);
  const [msg, setmsg] = useState([]);
  const [text, settext] = useState('');
  const handlesubmit = () => {
    fetch("http://localhost:8001/send/",{
      method:'POST',
      headers:{
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify({ message : text})
    });
    if(text.trim()){
      setmsg([...msg, text]);
      settext('');
    }
  };
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [msg]);
  return (
    <div className="w-full max-w-[500px] p-5">
      
      <div className="border-2 border-purple-950 rounded-xl shadow-[0_0_15px_rgba(122,84,245,0.6)] transition duration-300 h-[500px] w-[500px] p-4 flex-col flex justify-between">
        <div className="flex-1 overflow-y-auto no-scrollbar text-white mb-4">
          {msg.map((Message, index) => {
            return <MessageBubble key={index} text={Message} />
          })}
          <div ref={messagesEndRef} />
        </div>
          <div className="flex items-end">
            <textarea
              name="input1"
              className="border-white border-2 rounded-2xl text-xl text-white h-12 w-full bg-transparent outline-none resize-none mr-2 overflow-y-hidden hover:border-purple-950 focus:ring-2 focus:ring-purple-950 p-2"
              placeholder="Type here..."
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <button
              type="submit"
              className="text-white text-xl border-white border-2 rounded-2xl px-4 py-2 transition-transform duration-300 hover:scale-105 hover:border-purple-950 hover:shadow-lg"
              onClick={handlesubmit}
            >
              Submit
            </button>
            <FaMicrophone className="text-white text-4xl ml-2 mb-2 size-8 cursor-pointer hover:text-purple-400" />
            
          </div>
        </div>
    </div>
  );
};
