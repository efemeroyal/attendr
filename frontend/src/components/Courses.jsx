import { FaBookOpen, FaPlus } from "react-icons/fa";
import CourseList from "../components/CourseList";
import "../styles/Courses.css";
import Button from "./Button";

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      title: "Introduction to Programming",
      code: "CS101",
      students: 45,
      attendance: 85,
      sessions: 12,
    },
    {
      id: 2,
      title: "Data Structures",
      code: "CS201",
      students: 38,
      attendance: 92,
      sessions: 10,
    },
    {
      id: 3,
      title: "Database Systems",
      code: "CS301",
      students: 42,
      attendance: 78,
      sessions: 8,
    },
  ];

  return (
    <main className="courses">
      <section className="left">
        <div className="leftBox">
          <div className="leftBox__left">
            <h2>
              <FaBookOpen size={22} color="var(--primary)" /> My Courses
            </h2>
            <p>Manage your courses and sessions</p>
          </div>
          <div className="leftBox__right">
            <Button variant="course-accent">
              <FaPlus className="icon--plus" />
              Add Course
            </Button>
          </div>
        </div>
        <CourseList courses={courses} />
      </section>
    </main>
  );
}
