import React from "react";
import "../ListCourse/ListCourse.css";
import Button from "../Button/Button";
// import { useHistory } from "react-router-dom";
// import { getCourses } from "../../Pages/CourseDetail/course.service";

const ListItem = ({ courseName, onViewCourseDetail }) => {
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
// let history = useHistory();
// const course = getCourses();
// function onViewCourseDetail() {

//   const onViewCourseDetail = courseId => {
//     console.log(courseId);
//     history.push(`courses/${courseId}`);
//   };
//   return (
//     <ListItem
//       courseName={course.name}
//       onViewCourseDetail={onViewCourseDetail}
//     />
//   );
// }

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
