import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
  const [value, setValue] = useState(100);

  const handleSlide = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const getIndicatorColor = () => {
    if (value <= 5000) {
      return 'red';
    } else if (value <= 10000) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  const progress = (value - 100) / (15000 - 100) * 100;

  return (
    <div className="w-96 mx-auto relative">
      <motion.div
        className="absolute h-4 w-4 bg-white rounded-full shadow-xl"
        style={{ x: `${progress}%`, backgroundColor: getIndicatorColor() }}
        drag="x"
        dragConstraints={{ left: 0, right: 220 }}
        dragElastic={0.05}
      />
      <motion.div
        className="relative h-4 bg-gray-200 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
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