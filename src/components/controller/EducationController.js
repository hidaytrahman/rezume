import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Textarea } from "react-carbonui";
import { getYears } from "core/utils";
import { resumeActions } from "store/slice/resumeSlice";

const EducationController = () => {
  const resumeStore = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  // Select inputs
  const inputSchoolName = useRef(null);
  const inputCourses = useRef(null);
  const inputPassingDate = useRef(null);
  const inputGrade = useRef(null);

  const addHandler = () => {
    if (
      inputSchoolName.current.value !== "" &&
      inputCourses.current.value !== ""
    ) {
      const _data = {
        institute: inputSchoolName.current.value,
        course: inputCourses.current.value,
        passingYear: inputPassingDate.current.value,
        percentage: inputGrade.current.value,
      };
      dispatch(resumeActions.updateEducation(_data));
    } else {
      alert("Few fields are mandatory");
    }
  };

  const deleteHandler = (index) => {
    dispatch(resumeActions.deleteEducation(index));
  };

  return (
    <fieldset>
      <legend>
        <small>Education</small>
      </legend>
      <div className="row">
        <div className="col-sm-12">
          <div className="fields-wrapper">
            <Input
              className="form-control form-control-sm mt-2 m-1"
              type="text"
              fullWidth
              ref={inputSchoolName}
              placeholder="School / Institute Name"
            />

            <Input
              className="form-control form-control-sm m-1"
              type="text"
              fullWidth
              ref={inputCourses}
              placeholder="Degree / Course"
            />

            <div className="m-1">
              <label>
                <small>Select Passing Year</small>
                {""}
              </label>
              <select ref={inputPassingDate}>
                {getYears(1970).map((year, yearIndex) => (
                  <option value={year} key={yearIndex}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <Input
              className="form-control form-control-sm m-1"
              type="text"
              ref={inputGrade}
              fullWidth
              placeholder="Grade / %"
            />

            <div className="text-right mb-4">
              <Button
                type="button"
                variant="secondary"
                size="small"
                onClick={addHandler}
                label="Add"
              />
            </div>
          </div>
        </div>

        <ul className="list-group m-4">
          {resumeStore.resume.education &&
            resumeStore.resume.education.map((edu, i) => (
              <li className="list-group-item" key={i}>
                <div>
                  <div className="row company-heading">
                    <div className="col-sm-4 e-company-list-details-company-name">
                      {edu.course}
                    </div>

                    <div className="col-sm-4 e-company-list-details-company-designation">
                      {edu.institute}
                    </div>

                    <div className="col-sm-3 e-company-list-details-company-duration">
                      {edu.passingYear} / <small> {edu.percentage} </small>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="danger"
                    size="small"
                    onClick={() => deleteHandler(i)}
                    label="X"
                    title="Delete"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </fieldset>
  );
};

export default EducationController;
