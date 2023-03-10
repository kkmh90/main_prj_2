import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="bg-black header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <LinkScroll
              to="hero"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="robot"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Robot
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="about"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              About
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="gallery"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Gallery
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="contact"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </LinkScroll>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3000/#gallery" onClick={closeMenu}>
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="/board" onClick={closeMenu}>
              Board
            </a>
          </li>
        </ul>
        <ul>
          <button className="flex items-center justify-center w-16 h-8 text-white bg-green-500 border-none rounded-md shadow-md hover:bg-green-600">
            <Link to="/login">
              <p className="font-semibold ">Login </p>
            </Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
