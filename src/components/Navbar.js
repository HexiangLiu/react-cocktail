import React from 'react';
import { Link } from 'react-router-dom';
import { FaStream } from 'react-icons/fa';

//import logo svg
import logo from '../logo.svg';

//import styled sheet
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="brand" className="nav__brand" />
      </Link>
      <label htmlFor="show">
        <FaStream className="nav__toggle" />
      </label>

      {/* checkbox used to toggle nav__items */}
      <input type="checkbox" name="show" id="show" />

      <ul className="nav__items">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
