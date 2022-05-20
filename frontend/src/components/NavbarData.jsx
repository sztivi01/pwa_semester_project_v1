import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "../index.css";

export const NavbarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text ",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoMdSettings />,
    cName: "nav-text",
  },
];
