import React from "react";
// import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Introduction from "../../Components/Introduction/Introduction";
import ListCourse from "../../Components/ListCourse/ListCousre";
import "./Home.css";

import "font-awesome/css/font-awesome.min.css";

const Content = ({ courses, onViewCourseDetail }) => {
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
  // let history = useHistory();
  const handleViewCourseDetail = e => {
    console.log("what is course ID: ", e);

    // history.push(`/courses/${courseId}`);
    // Navigate to Course detail page
  };
  return (
    <div className="home-page">
      <Header />
      <Content onViewCourseDetail={handleViewCourseDetail} courses={courses} />
      <Footer />
    </div>
  );
};

export default Home;
