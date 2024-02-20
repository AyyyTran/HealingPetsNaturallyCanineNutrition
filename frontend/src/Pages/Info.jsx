import React from 'react';
import {Link} from 'react-scroll';

const Info = () => {
  return (
    <div className="bg-grey py-4">
      <h2 className="text-2xl text-secondary ">
        The Real Culprit: Low-Quality Pet Food
      </h2>
      <p className=" p-4 mx-auto lg:w-1/2 ">
        Many health issues stem from low-quality pet food. Pet food companies
        prioritize marketing and profit over your pet's health. They can include
        undisclosed ingredients, chemicals, and even garbage in their products,
        contributing to the rising prevalence of health issues in our beloved
        companions.
      </p>
      <p className="lg:w-1/2 mx-auto p-4">
        Let's work together to provide your pet with the nutrition they deserve
        — promoting longevity, vitality, and overall well-being.
      </p>
      <div className="bg-primary w-4/5 md:w3/4 lg:w-1/2 mx-auto rounded-xl p-4 text-grey">
        Ready to embark on a journey to better health for your furry friend?{' '}
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="underline px-1 hover:text-secondary"
        >
          Explore Services
        </Link>{' '}
        or{' '}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="underline px-1 hover:text-secondary"
        >
          Contact Me
        </Link>{' '}
        for a consultation.
      </div>
    </div>
  );
};

export default Info;
