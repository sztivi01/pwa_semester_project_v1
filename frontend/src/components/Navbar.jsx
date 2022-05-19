import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavbarData } from "./NavbarData";
import NavbarProjectNames from "./NavbarProjectNames";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import "../index.css";
import avatarImg from "../assets/avatar.jpg";

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
          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
           
            <img  className="w-16 rounded-full mr-5" src={avatarImg} alt="/" />
          </div>
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
                    <span className="ml-4">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li onClick={logOut} className="nav-text">
              <a href="/login">
                <IoIcons.IoMdLogOut />
                <span className="ml-4">Logout</span>
              </a>
            </li>  
            <div className="my-4 mx-3 border-b border-slate-400 "></div>
            <div className="relative">
              <div className="overflow-auto h-96">
                 <NavbarProjectNames />
              </div>
           
          
            </div>
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
