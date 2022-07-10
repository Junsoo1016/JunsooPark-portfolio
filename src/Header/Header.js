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
          
          <button className="menuBtn  nav_ac" onClick={handleToggle}>
            {isActive ? <VscClose /> : <VscMenu />}
          </button>
        </div>

        <div className={isActive ? "menu__opend" : ""}>
          <div className="menuOverall">
              <div className="menu__container">
                <ul className="the_menu">
                  <li className="menu_item">
                  <Link  onClick={handleToggle} to="/" className="menuList">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="menuList"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="menuList">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="menuList"> Contact</Link>
                  </li>
                </ul>
                <div className="footer">
                  <p className="copyright">copyright __ {logotext}</p>
               </div>
              </div>
          </div>
        </div>
      </header>     
    </>
  );
};

export default Header;
