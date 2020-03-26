import React from "react";
import "../ListCourse/ListCourse.css";
import Button from "../Button/Button";

const ListItem = ({ /*courseId,*/ courseName, onViewCourseDetail }) => {
  return (
    <div className="item">
      <span>{courseName}</span>
      <Button
        onClick={onViewCourseDetail}
        icon={<i className="fa fa-chevron-circle-right"></i>}
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

const Hint = ({ text }) => <p className="hint">{text}</p>;

function ListCourse({ onViewCourseDetail, courses = [] }) {
  return (
    <div className="list-course">
      <Hint text="Recommended quizzes based on your skills " />
      <div className="course-name">
        <List onViewCourseDetail={onViewCourseDetail} courses={courses} />
      </div>
    </div>
  );
}
export default ListCourse;
