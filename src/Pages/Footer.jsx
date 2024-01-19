import React from 'react';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="flex items-center justify-center space-x-12 lg:space-x-48">
        <Link
          className="w-50 hover:cursor-pointer"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img
            src="/logo-transparent.svg"
            alt="Logo"
            className="h-16 lg:h-20"
          />
        </Link>
        <a href="/" className="text-center justify-center font-medium">
          info@healingpetsnutrition.com
        </a>
      </div>
      <div className="bg-secondary text-white flex justify-center py-4 text-xs">
        Copyright © 2024 HealingPetsNaturallyCanineNutrition. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
