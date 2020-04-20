import React from "react";
import "../ListCourse/ListCourse.css";
import Button from "../Button/Button";

const ListItem = ({ courseName, onViewCourseDetail }) => {
  return (
    <div className="list-courses__item">
      <span>{courseName}</span>
      <Button
        onClick={onViewCourseDetail}
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
      />
    </div>
  );
};

const List = ({ onViewCourseDetail, courses = [] }) => {
  return (
    <div className="list-courses">
      {courses.map((course, idx) => {
        return (
          <ListItem
            onViewCourseDetail={onViewCourseDetail}
            key={idx}
            courseName={course.name}
          />
        );
      })}
    </div>
  );
};

const Hint = ({ text }) => <p className="course-header">{text}</p>;

function ListCourse({ onViewCourseDetail, courses = [] }) {
  return (
    <div className="content-course">
      <Hint text="Recommended quizzes based on your skills " />
      <div className="course-name">
        <List onViewCourseDetail={onViewCourseDetail} courses={courses} />
      </div>
    </div>
  );
}
export default ListCourse;
