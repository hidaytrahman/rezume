import Landing from "components/Landing/Landing";
import React, { useState, Suspense } from "react";
import "./App.scss";
const Header = React.lazy(() => import("./components/Header"));
const Resume = React.lazy(() => import("./components/resume/Resume"));
const ResumeController = React.lazy(() =>
  import("./components/controller/ResumeController")
);
const App = () => {
  const [view, setView] = useState("edit");

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header view={view} setView={setView} />

        {/* Add a landing page */}

        <Landing />

        {view === "edit" ? <ResumeController /> : <Resume />}
      </Suspense>
    </div>
  );
};

export default App;
