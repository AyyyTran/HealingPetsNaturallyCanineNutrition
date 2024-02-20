import React from 'react';
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Image */}
      <img
        src="./ChowChow.jpg"
        alt="Hero Background"
        className="object-cover w-full h-full"
      />

      {/* Darkened background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
        }}
      ></div>

      {/* Content */}
      <div className="hero flex flex-col mx-auto w-full pb-4 absolute inset-0 text-white">
        <div className="shadow-sm">
          <div className="w-96 justify-center mx-auto pt-48">
            <h1 className="text-3xl">
              Healthier & Happier Dogs with Premium Nutrition
            </h1>
          </div>
          <div className="w-96 justify-center mx-auto">
            <h2 className="text-2xl py-4">
              Discover Nutritious Diets Tailored for Your Furry Friend's
              Well-being.
            </h2>
          </div>
        </div>
        <div className="w-96 justify-center py-4 mx-auto">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="bg-primary text-white text-xl rounded-xl p-4 w-32 mx-auto text-l hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
