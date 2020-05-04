import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.page";
//import CourseDetails from "./Pages/CourseDetail/CourseDetails.page";
import CoursePage from "./Pages/CourseDetail/Course.page";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <ul className="btn-home">
          <li className="btn-icon">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M20 5.32L13.32 12 20 18.68 18.66 20 12 13.33 5.34 20 4 18.68 10.68 12 4 5.32 5.32 4 12 10.69 18.68 4z"></path>
              </svg>
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/courses/:courseId">
            <CoursePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
