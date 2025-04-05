import React from 'react';
import { Interface } from './components/Interface.jsx';
import { Character } from './components/charachter.jsx';

export const App = () => {
  return (
    <div className="bg-black min-h-screen  overflow-hidden">
      <h1 className="text-white text-4xl font-bold mt-15 ml-25">Luna</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center px-4 md:px-16 pt-8 md:pt-0 gap-10 md:gap-24">
        <div className="w-full md:w-[500px] flex justify-center">
          <Character />
        </div>

        <div className="w-full max-w-[500px] mr-30">
          <Interface />
        </div>
      </div>
    </div>
  );
};
