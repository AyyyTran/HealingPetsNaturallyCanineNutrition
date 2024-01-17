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
        <li className="hover:bg-white hover:text-primary p-2 rounded-md">
          <a href="/">About</a>
        </li>
        <li className="hover:bg-white hover:text-primary p-2 rounded-md">
          <a href="/">Certificates</a>
        </li>
        <li className="hover:bg-white hover:text-primary p-2 rounded-md">
          <a href="/">Services</a>
        </li>
        <li className="hover:bg-white hover:text-primary p-2 rounded-md">
          <a href="/">Plans</a>
        </li>
      </ul>
      <a href="/">
        <button className="bg-secondary hover:bg-accent rounded-3xl px-4 py-2">
          Book Now
        </button>
      </a>
    </navbar>
  );
};

export default Navbar;
