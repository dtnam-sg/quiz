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
        <figcaption>{course.description}</figcaption>
      </figure>
      <Button
        icon={<i className="fa fa-chevron-circle-right"></i>}
        onClick={e => onViewCourseDetail(course.courseId, e)}
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
  const onViewCourseDetail = courseId => {
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
