import Header from "components/Header";
import Landing from "components/Landing/Landing";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
// const Header = React.lazy(() => import("./components/Header"));
const Resume = React.lazy(() => import("./components/resume/Resume"));
const ResumeController = React.lazy(() =>
  import("./components/controller/ResumeController")
);
const App = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />

          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/view">
              <Resume />
            </Route>
            <Route path="/create">
              <ResumeController />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
