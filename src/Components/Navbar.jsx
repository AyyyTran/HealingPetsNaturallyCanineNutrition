import React from 'react';

const Navbar = () => {
  return (
    <navbar className="flex bg-primary text-white font-sans font-medium items-center justify-center space-x-48">
      <a href="/">
        <img
          src="logo-transparent.svg"
          alt="HealingPetsNaturallyLogo"
          className="h-16"
        />
      </a>
      <ul className="list-none flex items-center justify-center space-x-5">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Certificates</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Plans</a>
        </li>
      </ul>
      <a href="/">
        <button className="bg-secondary rounded-3xl px-4 py-2">Book Now</button>
      </a>
    </navbar>
  );
};

export default Navbar;
