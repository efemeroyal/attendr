import CourseItem from "./CourseItem";
import "../styles/CourseList.css";

export default function CourseList({ courses }) {
  return (
    <div className="courseList">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
