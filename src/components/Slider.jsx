import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
  const [value, setValue] = useState(100);

  const handleSlide = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const progress = (value - 100) / (15000 - 100) * 100;

  let indicatorColor;
  if (value < 5000) {
    indicatorColor = '#FF0000';
  } else if (value < 10000) {
    indicatorColor = '#FFA500';
  } else {
    indicatorColor = '#00FF00';
  }

  return (
    <div className="w-96 mx-auto">
      <motion.div
        className="relative h-4 bg-gray-200 rounded-full overflow-hidden"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          style={{ width: `${progress}%`, backgroundColor: indicatorColor }}
          initial={{ z: 200, scale: 0.8 }}
          animate={{ z: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <input
        type="range"
        min="100"
        max="15000"
        value={value}
        className="w-full h-full opacity-0 cursor-pointer"
        onChange={handleSlide}
      />
      <div className="flex justify-between mt-2 text-sm">
        <span>$100</span>
        <span>$15,000</span>
      </div>
      <div className="text-center mt-2 font-bold text-2xl">
        ${value}
      </div>
    </div>
  );
};

export default Slider;