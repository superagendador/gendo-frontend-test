import React from "react";
import imgLogo from './images/logo.png';
import './style.scss';


//stateless
const Header = () => (
  <header>
    <nav className="navbar">
      <div className="row">
        <div className="col-2">
          <a href="/">
            <img src={imgLogo} alt='Logo GitHub' />
          </a>
        </div>
        <div className="col-10">
          <a href="/">
            <h1 className="title text-white"><span className="font-weight-bold">Github</span> profiles</h1>
          </a>
        </div>
      </div>
    </nav>
    
  </header>
);

export default Header;