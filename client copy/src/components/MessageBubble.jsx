import React from 'react'

export const MessageBubble = ({text}) => {
  return (
    <div className="flex justify-end ">
      <div className="text-white bg-purple-900/20 p-3 border-2 border-purple-950 rounded-3xl max-w-[80%] mb-2">    
        {text}
      </div>
    </div>
  )
}

