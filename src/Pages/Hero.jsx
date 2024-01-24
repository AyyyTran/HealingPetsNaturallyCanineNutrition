import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col mx-auto w-96 pt-20 lg:pt-24 pb-4 h-screen justify-center">
      <h1 className="text-3xl">
        Healthier & Happier Dogs with Premium Nutrition
      </h1>
      <h2 className="text-2xl py-4">
        Discover Nutritious Diets Tailored for Your Furry Friend's Well-being.
      </h2>
      <button className="bg-grey rounded-xl p-4 w-32 mx-auto text-l">
        Book Now
      </button>
    </div>
  );
};

export default Hero;
