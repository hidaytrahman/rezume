import React from "react";
import { Button } from "react-carbonui";
import { useHistory } from "react-router-dom";

import "./Landing.scss";

const Landing = () => {
  const history = useHistory();

  const handleCreate = () => {
    history.push("/create");
  };

  const handlePreview = () => {
    history.push("/view");
  };

  return (
    <section className="landing-wrapper">
      <div className="landing-container">
        <Button
          className="landing-control create-control"
          onClick={handleCreate}
        >
          Create
        </Button>
        <Button
          className="landing-control sample-control"
          onClick={handlePreview}
        >
          View Sample
        </Button>
      </div>
    </section>
  );
};

export default Landing;
