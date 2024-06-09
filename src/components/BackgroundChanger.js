// src/components/BackgroundChanger.js
import React from 'react';

const BackgroundChanger = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/_Sl8diqCAFw?autoplay=1&mute=1&loop=1&playlist=_Sl8diqCAFw&controls=0&showinfo=0&autohide=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Video"
      ></iframe>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundChanger;

