import { useRef } from "react";
import { useSelector } from "react-redux";
import Personal from "./Personal";
import Professional from "./Professional";
import Education from "./Education";
import Extra from "./Extra";
import Me from "./Me";
import { useDispatch } from "react-redux";
import { print } from "core/utils";
import { resumeActions } from "store/slice/resumeSlice";
import { Button } from "react-carbonui";

const Resume = () => {
  const resumeStore = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const { personal, experience, education, skills, extra } = resumeStore.resume;
  const main = useRef();

  const downloadAsPdfHandler = () => {
    print();
  };

  const downloadAsJSONHandler = () => {
    dispatch(resumeActions.downloadAsJson());
  };

  return (
    <section id="resume-init" ref={main}>
      <div className="d-flex align-items-center justify-content-end no-print download-controls">
        <label className="m-0 mr-2">Download as</label>
        <Button
          className="download-btn no-print mr-2"
          onClick={downloadAsPdfHandler}
        >
          PDF <i className="fa fa-print" aria-hidden="true"></i>
        </Button>

        <Button
          className=" download-btn  no-print"
          onClick={downloadAsJSONHandler}
        >
          JSON <i className="fa fa-download" aria-hidden="true"></i>
        </Button>
      </div>
      <Personal personal={personal} skills={skills} />

      {experience && experience.list.length > 0 && (
        <Professional experience={experience} />
      )}

      {education && education.length > 0 && <Education education={education} />}

      {extra && extra.length > 0 && <Extra extra={extra} />}

      <Me personal={personal} />
    </section>
  );
};

export default Resume;
