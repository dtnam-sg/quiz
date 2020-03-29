import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.page";
import CourseDetails from "./Pages/CourseDetail/CourseDetails.page";
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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {
            <Route exact path="/">
              <Home />
            </Route>
            /*<Route path="/about">
            <About />
          </Route> */
          }
          <Route exact path="/courses/:courseId">
            <CourseDetails />
          </Route>
          <Route path="/courses/:courseId/:courseId">
            <CoursePage />
          </Route>
          {/* <Route path="/dashboard">
            <CourseDetails />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
