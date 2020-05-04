import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";

import Introduction from "../../Components/Introduction/Introduction";
import ListCourse from "../../Components/ListCourse/ListCousre";
import "./Home.css";
import { getCourses } from "../CourseDetail/course.service";

import "font-awesome/css/font-awesome.min.css";
import Tabs from "../../Components/Tabs/Tabs";
import Footer from "../../Components/Footer/Footer";
import Result from "../../Components/ResultContent/Result.Content";

const Content = ({ courses, onViewCourseDetail }) => {
  return (
    <div className="content">
      <Introduction />
      <ListCourse onViewCourseDetail={onViewCourseDetail} courses={courses} />
    </div>
  );
};

const Home = () => {
  let history = useHistory();
  const courses = getCourses();

  const handleViewCourseDetail = (courseId) => {
    console.log("what is course ID: ", courseId);
    console.log(courseId);

    history.push(`/courses/${courseId}`);
    // Navigate to Course detail page
  };
  return (
    <div className="home-page">
      <Header />
      <Tabs>
        <div label="Quizzes">
          <Content
            onViewCourseDetail={handleViewCourseDetail}
            courses={courses}
            // course={course}
          />
        </div>
        <div label="Result">
          <Result />
        </div>
      </Tabs>
      <Footer text="Done" />
    </div>
  );
};

export default Home;
