import React from "react";
import Qrcode from "./Qrcode";
import "../styles/ScanButton.css";

export default function ScanButton({ text }) {
  return (
    <button>
      <Qrcode />
      {text}
    </button>
  );
}
