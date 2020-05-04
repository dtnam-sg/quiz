import React from "react";
import { useParams } from "react-router-dom";
import "./Course.page.css";
import { getCourseById } from "./course.service";
import Footer from "../../Components/Footer/Footer";
const Course = ({ course }) => {
  return (
    <div className="course-page">
      <div className="course-header-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 84 21"
          data-supported-dps="84x21"
          width="84"
          height="21"
          focusable="false"
        >
          <g className="inbug" fill="none" fillRule="evenodd">
            <path
              d="M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0"
              className="bug-text-color"
              fill="#FFF"
            ></path>
            <path
              d="M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0zM70.875 7.875h2.844v1.429c.41-.822 1.46-1.56 3.038-1.56 3.025 0 3.743 1.635 3.743 4.636v5.557h-3.063v-4.874c0-1.709-.41-2.672-1.452-2.672-1.446 0-2.048 1.039-2.048 2.672v4.874h-3.062V7.876zm-5.25 10.063h3.063V7.874h-3.063v10.063zm3.5-13.344a1.969 1.969 0 11-3.938 0 1.969 1.969 0 013.938 0z"
              className="background"
              fill="#0073B0"
            ></path>
          </g>
          <g className="linkedin-text">
            <path d="M59.5 17.938h-2.625v-1.532c-.478.727-1.87 1.663-3.281 1.663-2.99 0-4.944-1.892-4.944-4.944 0-2.803 1.641-5.381 4.506-5.381 1.287 0 2.576.25 3.282 1.225V3.063H59.5v14.874zm-5.578-7.482c-1.557 0-2.34.935-2.34 2.45 0 1.516.783 2.494 2.34 2.494s2.56-.978 2.56-2.494c0-1.515-1.003-2.45-2.56-2.45zM47.25 16.242c-.997 1.267-2.994 1.827-4.922 1.827-3.114 0-5.053-2.164-5.053-5.381 0-3.218 2.319-4.944 5.49-4.944 2.626 0 4.835 1.845 4.835 5.381 0 .547-.088.875-.088.875H40.25l.049.293c.174.964 1.208 1.457 2.412 1.457 1.017 0 1.778-.443 2.297-1.148l2.242 1.64zm-2.734-4.43c.02-1.038-.814-1.88-1.935-1.88-1.37 0-2.248.905-2.331 1.88h4.266z"></path>
            <path d="M27.563 3.063h3.062v8.75l3.5-3.938h3.828l-4.266 4.594 4.102 5.469h-3.664l-3.5-4.813v4.813h-3.063zM16.188 7.875h2.625v1.477c.414-.79 1.766-1.608 3.28-1.608 3.156 0 3.72 1.862 3.72 4.56v5.633H22.75v-4.976c0-1.162.067-2.548-1.531-2.548-1.619 0-1.969 1.24-1.969 2.548v4.976h-3.063V7.876zM12.906 2.68c1.012 0 1.914.903 1.914 1.914 0 1.01-.902 1.914-1.914 1.914-1.01 0-1.914-.903-1.914-1.914s.904-1.914 1.914-1.914zm-1.531 15.258h3.063V7.874h-3.063v10.063zM0 3.063h3.063v11.812h6.562v3.063H0z"></path>
          </g>
        </svg>
        <h2 className="course-header-page__title">{course.name} Assessment</h2>
        <figcaption className="course-header-page__detail">
          {course.detail}
        </figcaption>
      </div>
      <div className="course-content">
        <div className="course-content__bub">
          <h3 className="course-content__title">Before you begin</h3>
          <p className="course-content__desc">
            Each quiz must be completed in one session; make sure you have a
            stable internet connection & you’re finished before exiting.
          </p>
          <p className="course-content__desc">
            The quiz is in English. If you don’t pass, your results won’t be
            displayed or shared on LinkedIn.
          </p>
        </div>
        <div className="course-content__overview">
          <h3 className="course-content__title">Overview</h3>
          <p className="course-content__desc">
            Answer 15-20 timed, multiple-choice questions
          </p>
          <ul className="course-content__list">
            <li className="course-content__education">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 12.12A5.12 5.12 0 1113.13 8 5.13 5.13 0 018 13.12zm.88-5.54L11 9.2l-1.05 1.4-2.43-1.85A1 1 0 017.13 8V4h1.75v3.58z"></path>
              </svg>
              <span className="course-content__education-desc">
                <strong>~15 minutes</strong> duration
              </span>
            </li>
            <li className="course-content__education">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M5 13v2H3a1 1 0 01-1-1V3a1 1 0 011-1h2.71L6 1.41A.76.76 0 016.68 1h.64a.76.76 0 01.68.41l.29.59H11a1 1 0 011 1v3h-2V4H9l-.25 1h-3.5L5 4H4v9zm8.54-6L9 12.72 7 10.1l-1.36 1.11 2.78 3.52a.74.74 0 001.15 0L14.86 8z"></path>
              </svg>
              <span className="course-content__education-desc">
                <strong>70th percentile</strong> required to pass and get a
                badge
              </span>
            </li>
            <li className="course-content__education">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M14 3h-1V1h-2v2H5V1H3v2H2a1 1 0 00-1 1v10a1 1 0 001 1h9.13L15 11.13V4a1 1 0 00-1-1zM3 5h10v2H3V5zm7 5v3H3V8h10v2h-3z"></path>
              </svg>
              <span className="course-content__education-desc">
                <strong>Retry in 3 months</strong> if you don’t pass
              </span>
            </li>
            <li>
              <a href="#" className="course-content__link">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Footer text="Start" />
      </div>
    </div>
  );
};
function CoursePage() {
  const { courseId } = useParams();
  console.log("courseId: ", courseId);

  const course = getCourseById(courseId);
  console.log("found course :", course);

  return (
    <div>
      <Course course={course} />
    </div>
  );
}
export default CoursePage;
