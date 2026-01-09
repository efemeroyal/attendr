import Card from "./Card";
import ProgressBar from "./ProgressBar";

export default function SessionItem({ session }) {
  const percent = (session.attended / session.total) * 100;

  return (
    <Card className="sessionItem">
      <div className="sessionHeader">
        <span className="badge">{session.code}</span>
        <span>{session.date}</span>
      </div>

      <div className="sessionInfo">
        <p>{session.time}</p>
        <h3>
          {session.attended}/{session.total} attended
        </h3>
      </div>

      <ProgressBar value={percent} />
    </Card>
  );
}
