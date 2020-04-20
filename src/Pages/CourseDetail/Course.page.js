import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { getCourseById } from "./course.service";
import Button from "../../Components/Button/Button";
const Course = ({ course, onBack }) => {
  return (
    <article className="course">
      <h2 className="name">{course.name}</h2>
      <figure>
        <img src={course.image} alt={course.name} />
        <figcaption>{course.description}</figcaption>
      </figure>
      <Button
        onClick={(e) => onBack(course.courseId, e)}
        buttonStyle="primary--solid"
        buttonSize="large"
        text="Back"
      />
    </article>
  );
};
function CoursePage() {
  const { courseId } = useParams();
  const history = useHistory();
  const course = getCourseById(courseId);
  const onBack = (courseId) => {
    history.push(`/courses/${courseId}`);
  };
  return (
    <div>
      <Course course={course} onBack={onBack} />
    </div>
  );
}
export default CoursePage;
