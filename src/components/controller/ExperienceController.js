import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Textarea } from "react-carbonui";

import { resumeActions } from "store/slice/resumeSlice";

const ExperienceController = () => {
  const resumeStore = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  // Select inputs
  const inputCompanyName = useRef(null);
  const inputCompanyFrom = useRef(null);
  const inputCompanyTo = useRef(null);
  const inputCompanyLocation = useRef(null);
  const inputCompanyDesignation = useRef(null);
  const inputCompanyResponsibilities = useRef(null);

  const addExperienceHandler = () => {
    if (
      inputCompanyName.current.value !== "" &&
      inputCompanyFrom.current.value !== ""
    ) {
      const _data = {
        company: inputCompanyName.current.value,
        from: inputCompanyFrom.current.value,
        to: inputCompanyTo.current.value,
        location: inputCompanyLocation.current.value,
        designation: inputCompanyDesignation.current.value,
        responsibilities: inputCompanyResponsibilities.current.value,
      };

      dispatch(resumeActions.updateExperience(_data));
    } else {
      alert("Few fields are mandatory");
    }
  };

  const deleteHandler = (index) => {
    dispatch(resumeActions.deleteExperience(index));
  };

  return (
    <fieldset>
      <legend>
        <small>Experience</small>
      </legend>
      <div className="row">
        <div className="col-sm-12">
          <Button size="small">New +</Button>

          <div className="fields-wrapper d-flex flex-column mb-4">
            <Input
              id="companyName"
              className="form-control form-control-sm mt-2 m-1"
              type="text"
              fullWidth
              innerRef={inputCompanyName}
              placeholder="Company Name"
            />

            <Input
              id="companyName"
              className="form-control form-control-sm m-1"
              type="date"
              innerRef={inputCompanyFrom}
              placeholder="From"
            />

            <Input
              id="companyName"
              className="form-control form-control-sm m-1"
              type="date"
              innerRef={inputCompanyTo}
              placeholder="To"
            />

            <Input
              id="companyName"
              className="form-control form-control-sm m-1"
              type="text"
              innerRef={inputCompanyLocation}
              placeholder="Location"
            />

            <Input
              id="companyName"
              className="form-control form-control-sm m-1"
              type="text"
              innerRef={inputCompanyDesignation}
              placeholder="designation"
            />

            <Textarea
              className="form-control form-control-sm m-1"
              innerRef={inputCompanyResponsibilities}
            ></Textarea>

            <div className="text-right m-2">
              <Button
                type="button"
                variant="secondary"
                size="small"
                onClick={addExperienceHandler}
              >
                Add
              </Button>
            </div>
          </div>
        </div>

        <ul className="list-group resume-list-container">
          {resumeStore.resume.experience.list &&
            resumeStore.resume.experience.list.map((exp, i) => (
              <li className="list-group-item" key={i}>
                <>
                  <div className="row company-heading ">
                    <div className="col-sm-4 e-company-list-details-company-name">
                      {exp.company} <small>{exp.location}</small>
                    </div>

                    <div className="col-sm-4 e-company-list-details-company-designation">
                      {exp.designation}
                    </div>

                    <div className="col-sm-3 e-company-list-details-company-duration">
                      {exp.from} - {exp.to}
                    </div>
                  </div>

                  <div className="e-company-list-details-company-responsibilities">
                    <strong>Responsibilities: </strong>
                    {exp.responsibilities}
                  </div>

                  <Button
                    variant="danger"
                    size="small"
                    className="m-2 delete-btn"
                    onClick={() => deleteHandler(i)}
                    title="Delete"
                  >
                    X
                  </Button>
                </>
              </li>
            ))}
        </ul>
      </div>
    </fieldset>
  );
};

export default ExperienceController;
