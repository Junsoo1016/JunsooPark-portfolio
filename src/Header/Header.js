import React, { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_options";
import "./Header.css";

const Header = () => {
  
  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive)
  };

  return (
    <>
      <header>
        <div className="navBox">          
          <Link  className="logoText" to="/">
            {logotext}
          </Link>
          
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {isActive ? <VscClose /> : <VscMenu />}
          </button>
        </div>

        <div className={isActive ? "menu__opend" : "menu__closed"}>
          <div>
              <div className="menu__container">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
          </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
      </header>     
    </>
  );
};

export default Header;
