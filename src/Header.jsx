import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen bg-[url('')]">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center mb-4">Welcome to Pop Rock Crystal</h1>
          <p className="text-lg text-white text-center mb-8">Discover the latest fashion trends and styles</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;