import React from 'react';
import { motion } from 'framer-motion';
import Slider from './Slider';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white p-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Revenue Site</h1>
          <nav>
            <ul className="flex">
              <li className="ml-4">
                <a href="/">Home</a>
              </li>
              <li className="ml-4">
                <a href="/">About</a>
              </li>
              <li className="ml-4">
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Maximize Your Revenue
            </motion.h2>
            <motion.p
              className="text-lg mb-6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We help you to increase your revenue by providing the best
              solutions for your business needs.
            </motion.p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-8 rounded"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get Started
            </motion.button>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute bottom-0 w-full h-2/3 bg-gray-800 opacity-75" />
                
              <Slider />
              <img src={img4} alt="/"/>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap mt-12">
          <div className="w-full md:w-1/3 mb-8">
            <motion.div
              className="h-64 bg-white rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                className="w-full h-full object-cover"
                src={img1}
                alt="product"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  Product One
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/3 mb-8">
        <motion.div
          className="h-64 bg-white rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            className="w-full h-full object-cover"
            src={img2}
            alt="product"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">
              Product Two
            </h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/3 mb-8">
        <motion.div
          className="h-64 bg-white rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            className="w-full h-full object-cover"
            src={img3}
            alt="product"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">
              Product Three
            </h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </main>
  <footer className="bg-gray-900 text-white py-4">
    <div className="container mx-auto">
      <p className="text-center">
        &copy; 2021 Revenue Site. All Rights Reserved.
      </p>
    </div>
  </footer>
</div>
);
};

export default LandingPage;
