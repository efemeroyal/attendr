import React from "react";
import SessionList from "./SessionList";
import "../styles/Sessions.css";
import { FaClock } from "react-icons/fa";

const sessions = [
  {
    id: 1,
    code: "CS101",
    date: "2026-01-07",
    time: "09:00 AM",
    attended: 42,
    total: 45,
  },
  {
    id: 2,
    code: "CS201",
    date: "2026-01-06",
    time: "02:00 PM",
    attended: 36,
    total: 38,
  },
  {
    id: 3,
    code: "CS301",
    date: "2026-01-05",
    time: "10:00 AM",
    attended: 35,
    total: 42,
  },
];
export default function Sessions() {
  return (
    <aside className="sessions">
      <h2>
        <FaClock color="var(--primary)" />
        Recent Sessions
      </h2>
      <p>Latest class sessions</p>
      <SessionList sessions={sessions} />
    </aside>
  );
}
