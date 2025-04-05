import React from 'react'

export const MessageBubble = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-3 border-2 rounded-3xl max-w-[80%] whitespace-pre-wrap mb-2
        ${isUser ? 'bg-purple-900/20 border-purple-950 text-white' : 'bg-purple-900/20 border-purple-950 text-white'}`}>
        {text}
      </div>
    </div>
  );
};


