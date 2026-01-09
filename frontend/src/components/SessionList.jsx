import { FaChevronRight } from "react-icons/fa";
import SessionItem from "./SessionItem";

export default function SessionList({ sessions }) {
  return (
    <div className="sessionsList">
      {sessions.map((s) => (
        <SessionItem key={s.id} session={s} />
      ))}
      <a href="#" className="viewAll">
        View All Sessions <FaChevronRight size={10} />
      </a>
    </div>
  );
}
