import Card from "./Card";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import "../styles/CourseItem.css";
import { FaCog, FaPlay } from "react-icons/fa";

export default function CourseItem({ course }) {
  return (
    <Card className="courseItem">
      <div className="courseItem__top">
        <div className="courseLeft">
          <div className="courseIcon">
            {course.code.split("").splice(0, 2).join("").toUpperCase()}
          </div>
          <div className="courseInfo">
            <h3>{course.title}</h3>
            <p>
              {course.code} • {course.students} students
            </p>
          </div>
        </div>

        <div className="courseActions">
          <Button variant="success">
            <FaPlay /> Start
          </Button>
          <Button variant="accent">
            <FaCog />
          </Button>
        </div>
      </div>

      <div className="courseItem__bottom">
        <div className="courseStats">
          <div className="courseStats__top">
            <small>Avg. Attendance</small>
            <span
              className="percent"
              style={
                course.attendance < 40
                  ? { color: "var(--error)" }
                  : course.attendance < 80
                  ? { color: "var(--warning)" }
                  : { color: "var(--success)" }
              }
            >
              {course.attendance}%
            </span>
          </div>
          <ProgressBar value={course.attendance} />
        </div>

        <div className="courseSessions">
          <p>{course.sessions} sessions</p>
        </div>
      </div>
    </Card>
  );
}
