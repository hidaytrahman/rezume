import { useRef } from "react";
import { useSelector } from "react-redux";


const ExperienceController = () => {

    const resumeStore = useSelector(state => state.resume);


    // Select inputs
    const inputCompanyName = useRef(null);
    const inputCompanyFrom = useRef(null);
    const inputCompanyTo = useRef(null);
    const inputCompanyLocation = useRef(null);
    const inputCompanyDesignation = useRef(null);
    const inputCompanyResponsibilities = useRef(null);


    const addExperienceHandler = () => {

        if (inputCompanyName.current.value !== "" && inputCompanyFrom.current.value !=="") {
            const _data = {
                company: inputCompanyName.current.value,
                from: inputCompanyFrom.current.value,
                to: inputCompanyTo.current.value,
                location: inputCompanyLocation.current.value,
                designation: inputCompanyDesignation.current.value,
                responsibilities: inputCompanyResponsibilities.current.value
            }

            resumeStore.updateExperience(_data);
        } else {
            alert("Few fields are mandatory");
        }

    }

    const deleteHandler = (index) => {
        resumeStore.deleteExperience(index);
    }

    return (
        <fieldset>
            <legend>Experience</legend>
            <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-secondary form-control-sm">Add New [+]</button>


                    <div className="fields-wrapper">
                        <input id="companyName"
                            className="form-control form-control-sm"
                            type="text"
                            ref={inputCompanyName}
                            placeholder="Company Name" />

                        <input id="companyName"
                            className="form-control form-control-sm"
                            type="date"
                            ref={inputCompanyFrom}
                            placeholder="From" />

                        <input id="companyName"
                            className="form-control form-control-sm"
                            type="date"
                            ref={inputCompanyTo}
                            placeholder="To" />

                        <input id="companyName"
                            className="form-control form-control-sm"
                            type="text"
                            ref={inputCompanyLocation}
                            placeholder="Location" />

                        <input id="companyName"
                            className="form-control form-control-sm"
                            type="text"
                            ref={inputCompanyDesignation}
                            placeholder="designation" />

                        <textarea className="form-control form-control-sm"
                            ref={inputCompanyResponsibilities}></textarea>

                        <button type="button" className="btn btn-success" onClick={addExperienceHandler}>Add</button>
                    </div>
                </div>

                <ul className="list-group">
                    {
                        resumeStore.resume.experience.list &&
                        resumeStore.resume.experience.list.map((exp, i) => (
                            <li className="list-group-item" key={i}>
                                <div>
                                    <div className="row company-heading">

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
                                        <strong>Responsibilities: </strong>{exp.responsibilities}
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

export default ExperienceController;