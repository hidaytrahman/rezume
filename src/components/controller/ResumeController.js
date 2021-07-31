import { observer } from "mobx-react";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useStores } from "../../store";

import "./resumeController.scss"
import ExperienceController from "./ExperienceController";
import EducationController from "./EducationController";

const ResumeController = () => {

    const { resumeStore } = useStores();

    const [avt, setAvt] = useState(resumeStore.resume.personal.avatar);
    const [message, setMessage] = useState("");


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const fileReadHandler = (e) => {
        readURI(e); // maybe call this with webworker or async library?
    }


    const readURI = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (ev) {
                setAvt(ev.target.result);
            }.bind(this);
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const onSubmit = data => {
        data.avatar = avt;
        resumeStore.updateResume(data);

        console.log(data);

        resumeStore.getResume();

        setMessage("Resume data has been store and can be checked in the view");
    }



    return (
        <>
            <hr />

            <section className="edit-section container">
                {
                    message &&
                    <div className="alert alert-success">{message}</div>
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">


                        <div className="col-sm-6">
                            <div className="row">
                                {/* <h2>Personal</h2> */}
                            </div>
                            <div className="row avatar-wrapper">
                                <div className="col-sm-6">

                                    <div className="form-group">
                                        <label>Photo</label>
                                        <input
                                            type="file"
                                            accept="image/*" className="form-control-file"

                                            onInput={(e) => fileReadHandler(e)}
                                            {...register("avatarFile")} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <img id="blah" className="avatar-preview" src={avt} alt={resumeStore.resume.personal.firstName} />
                                </div>
                            </div>




                            <div className="row">
                                <div className="col-sm-6">
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="First Name"
                                        {...register("firstName", { required: true })} />
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="Last Name"
                                        {...register("lastName", { required: true })} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlInput1">Father name</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="Father Name"
                                        {...register("fatherName")} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlInput1">Languages</label>
                                    <input className="form-control form-control-sm" defaultValue="english" type="text"
                                        placeholder="hindi, english"
                                        {...register("languages", { required: true })} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com"
                                            {...register("email", { required: true })} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">DOB</label>
                                        <input type="date" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com"
                                            {...register("dob", { required: true })} />
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Marital Status</label>
                                        <select className="form-control form-control-sm"
                                            defaultValue="Unmarried" id="exampleFormControlSelect1"
                                            {...register("maritalStatus")}>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                        </select>
                                    </div>
                                </div>

                            </div>


                            <div className="row">

                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlSelect1">Country</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="Country"
                                        {...register("address", { required: true })} />
                                </div>
                                <div className="col-sm-6">
                                <label htmlFor="exampleFormControlSelect1">Address</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="address"
                                        {...register("address", { required: true })} />
                                </div>
                            </div>





                            <div className="row">
                                <div className="col-sm-6"></div>
                                <div className="col-sm-6"></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6"></div>
                                <div className="col-sm-6"></div>
                            </div>

                        </div>

                        {/* PROFESSIONAL */}
                        <div className="col-sm-6">

                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlSelect1">Nationality</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="nationality"
                                        {...register("nationality", { required: true })} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlSelect1">Religion</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="religion"
                                        {...register("religion", { required: true })} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlSelect1">Designation</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="designation"
                                        {...register("designation", { required: true })} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="exampleFormControlSelect1">Website</label>
                                    <input className="form-control form-control-sm" type="url"
                                        placeholder="website"
                                        {...register("website", { required: true })} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Bio</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    {...register("bio")}></textarea>
                            </div>

                            {/* <h2>Professional</h2> */}

                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Primary Skills</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="eg: account, javascript"
                                        {...register("primarySkills", { required: true })} />
                                </div>
                                <div className="col-sm-6">
                                    <label>Other Skills</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="eg: skill, skill2"
                                        {...register("secondarySkills", { required: true })} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Custom Labels</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="eg: Expertise on"
                                        {...register("primarySkillsLabel", { required: true })} />
                                </div>
                                <div className="col-sm-6">
                                    <label>Other Skills</label>
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="eg: Familiar With"
                                        {...register("secondarySkillsLabel", { required: true })} />
                                </div>
                            </div>


                        </div>
                    </div>



                    <div className="row">
                        <div className="col-sm-6">
                            <ExperienceController resumeStore={resumeStore} />
                        </div>

                        <div className="col-sm-6">
                            <EducationController />
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Apply</button>
                    </div>
                </form>

            </section>
        </>


    )
}

export default observer(ResumeController);