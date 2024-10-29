import React from 'react';

const Hero = () => {
    return (
      <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Welcome to <span className="text-orange-600">BakeCrafters!</span>
          </h1>
          <p className="text-xl mb-6 italic">
              Where Every Bite Tells a Story
          </p>
          <p className="mb-8 text-lg">
              Indulge in the magic of freshly baked goods, crafted with passion and precision. 
              Our artisanal breads and decadent pastries are baked to perfection, just for you.
          </p>
          <div className="flex justify-center">
              <img src="image.jpg" alt="Delicious Bakery Items" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
      </div>
  </section>
    );
};

export default Hero;
