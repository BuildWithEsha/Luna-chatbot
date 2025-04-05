// src/components/Character.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';

export const Character = () => {
  return (
    <div className="w-[1000vw] h-[100vw] md:w-[500px] md:h-[500px] transition-all duration-500">
      <Spline scene="https://prod.spline.design/82GIAoYZJBW2FbSQ/scene.splinecode" />
    </div>
  );
};
