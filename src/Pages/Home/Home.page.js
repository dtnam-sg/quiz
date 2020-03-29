import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Introduction from "../../Components/Introduction/Introduction";
import ListCourse from "../../Components/ListCourse/ListCousre";
import "./Home.css";
import { getCourses } from "../CourseDetail/course.service";
import "font-awesome/css/font-awesome.min.css";

const Content = ({ courses, onViewCourseDetail, course }) => {
  return (
    <div className="content">
      <Introduction />
      <ListCourse onViewCourseDetail={onViewCourseDetail} courses={courses} />
    </div>
  );
};

const Home = () => {
  const courses = [
    { name: ".NET Framework " },
    { name: "Java " },
    { name: "C# " },
    { name: "React " },
    { name: "Vue" }
  ];
  let history = useHistory();
  const course = getCourses();

  const handleViewCourseDetail = courseId => {
    console.log("what is course ID: ", courseId);
    console.log(courseId);

    history.push(`/courses/${courseId}`);
    // Navigate to Course detail page
  };
  return (
    <div className="home-page">
      <Header />
      <Content
        onViewCourseDetail={handleViewCourseDetail}
        courses={courses}
        course={course}
      />
      <Footer />
    </div>
  );
};

export default Home;
