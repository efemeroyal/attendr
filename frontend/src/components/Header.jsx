import React from "react";
import { FaRegBell, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import "../styles/Header.css";
import { HiMiniQrCode } from "react-icons/hi2";

export default function Header({ name, role, roleID }) {
  return (
    <header>
      <div className="logo">
        <span>
          <HiMiniQrCode />
        </span>
        <h3>ATTENDR</h3>
        <small>{role}</small>
      </div>
      <div className="options">
        <div className="options__bell">
          <FaRegBell />
        </div>
        <div className="options__info">
          <div className="options__info--user">
            <FaRegUser />
          </div>
          <div>
            <h4>{name}</h4>
            <small>{roleID}</small>
          </div>
        </div>
        <div className="options__logOut">
          <FaSignOutAlt size={15} />
        </div>
      </div>
    </header>
  );
}
