import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data from "./Data.json";
import Logo from "../../assets/images/earth.png";

import "./header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="header">
        <div className="top-bar">
          <div className="logo-icon">
            <img src={Logo} alt="" />
          </div>
          <div className="title">
            <h1 className="title-heading">KOSMOFLY</h1>
          </div>

          <div className="menu">
            <span className="mobile-menu" onClick={handleClick}>
              <FaBars size={26} className={click ? "active-bars" : "bars"} />
            </span>
          </div>
        </div>

        <ul className={click ? "active" : "links"} onClick={closeMobileMenu}>
          {Data.map((item, id) => {
            const { name, path } = item;
            return (
              <Link key={id} to={path}>
                <li className="link">{name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
