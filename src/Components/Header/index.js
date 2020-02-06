import React from "react";
import imgLogo from './images/logo.png';
import './style.scss';


//stateless
const Header = () => (
  <header>
    <nav className="navbar">
      <div className="row">
        <div className="col-2">
          <img src={imgLogo} alt='Logo GitHub' />
        </div>
        <div className="col-10">
          <h1 className="title text-white"><span className="font-weight-bold">GitHub</span> Profile</h1>
        </div>
      </div>
    </nav>
    
  </header>
);

export default Header;