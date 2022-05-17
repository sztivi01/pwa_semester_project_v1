import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import "../index.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <IoIcons.IoMdClose />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li onClick={logOut} className="nav-text">
              <a href="/login">
                <IoIcons.IoMdLogOut />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
