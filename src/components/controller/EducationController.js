import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getYears } from "../../core/utils";
import { resumeActions } from "../../store/slice/resumeSlice";

const EducationController = () => {

    const resumeStore = useSelector(state => state.resume);
    const dispatch = useDispatch();

    // Select inputs
    const inputSchoolName = useRef(null);
    const inputCourses = useRef(null);
    const inputPassingDate = useRef(null);
    const inputGrade = useRef(null);

    const addHandler = () => {

        if (inputSchoolName.current.value !== "" && inputCourses.current.value !== "") {
            const _data = {
                institute: inputSchoolName.current.value,
                course: inputCourses.current.value,
                passingYear: inputPassingDate.current.value,
                percentage: inputGrade.current.value,
            }
            dispatch(resumeActions.updateEducation(_data))
        } else {
            alert("Few fields are mandatory");
        }

    }

    const deleteHandler = (index) => {
        dispatch(resumeActions.deleteEducation(index))
    }

    return (
        <fieldset>
            <legend>Education</legend>
            <div className="row">
                <div className="col-sm-12">
                    <div className="fields-wrapper">
                        <input
                            className="form-control form-control-sm"
                            type="text"
                            ref={inputSchoolName}
                            placeholder="School / Institute Name" />

                        <input
                            className="form-control form-control-sm"
                            type="text"
                            ref={inputCourses}
                            placeholder="Degree / Course" />


                        <label>Select Passing Year</label>
                        <select
                            ref={inputPassingDate}>
                            {
                                getYears(1970).map((year, yearIndex) => (
                                    <option value={year} key={yearIndex}>{year}</option>
                                ))
                            }
                        </select>

                        <input
                            className="form-control form-control-sm"
                            type="text"
                            ref={inputGrade}
                            placeholder="Grade / %" />


                        <button type="button" className="btn btn-success" onClick={addHandler}>Add</button>
                    </div>
                </div>

                <ul className="list-group">
                    {
                        resumeStore.resume.education &&
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
                                            {edu.passingYear} / <small>  {edu.percentage} </small>
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-danger"
                                        onClick={() => deleteHandler(i)}>Delete</button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </fieldset>
    )
}

export default EducationController;