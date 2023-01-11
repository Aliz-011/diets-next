import React from 'react';

const Hero = () => {
  return (
    <div className="h-[40vh] w-screen bg-white">
      <div className="px-4 md:px-16 h-full w-full bg-gradient-to-br from-pink-500 to-orange-400">
        <div className="h-full flex flex-col gap-5 items-center justify-center">
          <h2 className="text-4xl text-white">
            Starts your diet right away and keep your body always fit.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
