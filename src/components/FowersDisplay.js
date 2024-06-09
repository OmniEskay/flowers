// src/components/FlowerDisplay.js
import React, { useState, useEffect } from 'react';

const FlowerDisplay = () => {
  const flowers = [
    { id: 1, name: 'Rose 1', img: 'Rose 1.jpeg' },
    { id: 2, name: 'Cherry 1', img: 'Cherry 1.jpeg' },
    { id: 3, name: 'Rose 2', img: 'Rose 2.jpeg' },
    { id: 4, name: 'Cherry 2', img: 'Cherry 2.jpeg' },
    { id: 5, name: 'Rose 3', img: 'Rose 3.jpeg' },
    { id: 6, name: 'Rose 4', img: 'Rose 4.jpeg' },
    { id: 7, name: 'Rose 5', img: 'Rose 5.jpeg' },
  ];

  const [currentFlowerIndex, setCurrentFlowerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlowerIndex((prevIndex) => (prevIndex + 1) % flowers.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [flowers.length]);

  const currentFlower = flowers[currentFlowerIndex];

  return (
    <div className="flex justify-center p-4">
      <div className="text-center">
        <img
          src={currentFlower.img}
          alt={currentFlower.name}
          className="w-64 h-64 object-cover rounded-full transition-opacity duration-1000"
          style={{ opacity: currentFlowerIndex }}
        />
        <p className="mt-2 text-xl">{currentFlower.name}</p>
      </div>
    </div>
  );
};

export default FlowerDisplay;
