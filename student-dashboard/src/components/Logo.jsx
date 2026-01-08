import React from "react";
import "./logo.css";
import { HiMiniQrCode } from "react-icons/hi2";
export default function Logo() {
  return (
    <div className="logo">
      <span>
        <HiMiniQrCode />
      </span>
      <h1>ATTENDR</h1>
    </div>
  );
}
