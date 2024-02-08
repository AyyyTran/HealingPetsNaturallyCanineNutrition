import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // add top padding of h-16 and lg:h-20
    <navbar className="fixed top-0 z-50 flex items-center justify-between px-4 text-lg lg:text-xl w-full h-16 bg-secondary text-white lg:h-20">
      <Link
        className="w-1/2 text-3xl font-bold text-white hover:cursor-pointer flex lg:items-center lg:w-40 lg:justify-center "
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <img src="/logo-transparent.svg" alt="Logo" className="h-16 lg:h-20" />
      </Link>
      <ul className="hidden lg:flex lg:items-center  ">
        <li className="p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl ">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl ">
          <Link
            to="plans"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Plans
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl ">
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:flex lg:items-center ">
        <li className="px-4 py-2 font-bold rounded-3xl hover:cursor-pointer  bg-primary hover:bg-white hover:text-secondary focus:outline-none focus:shadow-outline">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Let's Talk
          </Link>
        </li>
      </ul>
      <div className="hover:cursor-pointer lg:hidden" onClick={handleNav}>
        <AiOutlineMenu size={40} />
      </div>
      <div
        className={
          nav
            ? 'fixed top-0 left-0 h-fit pb-4 w-full z-50 bg-secondary ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        {/* MOBILE MENU */}
        <div className="flex items-center px-4 pt-4 ">
          <Link
            className="w-full text-3xl font-bold hover:cursor-pointer  text-text-base"
            to="hero"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            onClick={handleNav}
          >
            <img src="/logo-transparent.svg" alt="Logo" className="h-16" />{' '}
          </Link>
          <div className="block hover:cursor-pointer  " onClick={handleNav}>
            <AiOutlineClose size={40} />
          </div>
        </div>
        <ul className="uppercase">
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Services
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl">
            <Link
              to="plans"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Plans
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-primary rounded-2xl">
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Reviews
            </Link>
          </li>
          <li className="flex justify-center py-2 mx-2 font-bold rounded-3xl hover:cursor-pointer  bg-primary hover:bg-white hover:text-secondary focus:outline-none focus:shadow-outline">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
