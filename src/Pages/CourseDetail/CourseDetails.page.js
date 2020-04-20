import React from "react";
import "./CourseDetails.css";
import Button from "../../Components/Button/Button";
import { getCourses } from "./course.service";
import { useHistory } from "react-router-dom";

const CourseItems = ({ course, onViewCourseDetail }) => {
  return (
    <article>
      <h2>{course.name}</h2>
      <figure>
        <img className="img" src={course.image} alt={course.name} />
      </figure>
      <Button
        buttonStyle="next--circle"
        buttonSize="medium"
        text={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z" />
          </svg>
        }
        onClick={(e) => onViewCourseDetail(course.courseId, e)}
      />
    </article>
  );
};
const CourseList = ({ course = [], onViewCourseDetail }) => {
  return (
    <div>
      {course.map((course, idx) => {
        return (
          <CourseItems
            key={idx}
            course={course}
            onViewCourseDetail={onViewCourseDetail}
          />
        );
      })}
    </div>
  );
};
function CourseDetails() {
  let history = useHistory();
  const course = getCourses();
  const onViewCourseDetail = (courseId) => {
    console.log(courseId);
    history.push(`/courses/${courseId}/${courseId}`);
  };
  return (
    <div>
      <h2>Course Details</h2>
      <CourseList course={course} onViewCourseDetail={onViewCourseDetail} />
    </div>
  );
}
export default CourseDetails;
