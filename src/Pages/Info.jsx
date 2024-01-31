import React from 'react';

const Info = () => {
  return (
    <div className="bg-grey py-4">
      <h2 className="text-xl text-secondary ">
        The Real Culprit: Low-Quality Pet Food
      </h2>
      <p className="text-sm p-4 mx-auto lg:w-1/2">
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
        Ready to embark on a journey to better health for your furry friend?
        <a href="/"> Explore Services </a> or <a href="/">Contact Me</a> for a
        consultation.
      </div>
    </div>
  );
};

export default Info;
