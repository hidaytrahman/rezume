import React from "react";
import { Button } from "react-carbonui";
import "./Landing.scss";

const Landing = () => {
  return (
    <section className="landing-wrapper">
      <div className="landing-container">
        <Button className="landing-control create-control">Create</Button>
        <Button className="landing-control sample-control">View Sample</Button>
      </div>
    </section>
  );
};

export default Landing;
