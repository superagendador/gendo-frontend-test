import React from "react";
import imgLogo from './images/logo.png';

//stateless
const Header = () => (
  <header>
    <img src={imgLogo} alt='Logo GitHub' />
    <h1 className="title">GitHub Profile</h1>
  </header>
);

export default Header;