import React from 'react';
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div className=" hero bg-hero bg-cover bg-center flex flex-col mx-auto w-full pb-4 h-screen">
      <div className="shadow-sm ">
        <div className="w-96 justify-center mx-auto pt-48">
          <h1 className="text-3xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
            Healthier & Happier Dogs with Premium Nutrition
          </h1>
        </div>
        <div className="w-96 justify-center mx-auto">
          <h2 className="text-2xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] py-4">
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
          className="bg-primary text-white text-xl rounded-xl p-4 w-32 mx-auto text-l lg:hover:-translate-y-0.5 lg:hover:scale-105 lg:hover:bg-white lg:hover:text-primary"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
