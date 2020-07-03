import React from 'react';
import { Link } from 'react-router-dom';

//import logo svg
import logo from '../logo.svg';

//import styled sheet
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__brand" to="/">
        <img src={logo} alt="brand" />
      </Link>

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
