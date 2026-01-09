import React from "react";
import Qrcode from "./Qrcode";
import ScanButton from "./ScanButton";
import "../styles/SessionCheck.css";

export default function SessionCheck() {
  return (
    <div className="sessionCheck">
      <section className="sessionDetails">
        <Qrcode />
        <div>
          <h2>Active session available</h2>
          <span>
            <h4>CS101-introduction to programming</h4>
            <p>Expires in 12min</p>
          </span>
        </div>
      </section>
      <ScanButton text="Scan Now" />
    </div>
  );
}
