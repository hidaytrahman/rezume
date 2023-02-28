import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Input, Textarea } from "react-carbonui";

import "./resumeController.scss";
import ExperienceController from "./ExperienceController";
import EducationController from "./EducationController";
import { useDispatch, useSelector } from "react-redux";

import { resumeActions } from "store/slice/resumeSlice";

const ResumeController = () => {
  const resumeStore = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  const [avt, setAvt] = useState(resumeStore.resume.personal.avatar);
  const [message, setMessage] = useState("");

  const { register, handleSubmit } = useForm();

  const fileReadHandler = (e) => {
    readURI(e); // maybe call this with webworker or async library?
  };

  const readURI = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        setAvt(ev.target.result);
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = (data) => {
    data.avatar = avt;

    // adding only one mobile number
    data.mobile = [data.mobileNumber];

    dispatch(resumeActions.updateResume(data));
    console.log(data);
    setMessage("Resume data has been store and can be checked in the view");
  };

  return (
    <>
      <hr />

      <section className="edit-section container">
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">{/* <h2>Personal</h2> */}</div>
              <div className="row avatar-wrapper">
                <div class="upload-btn-wrapper">
                  <Button variant="secondary" className="btn-upload">
                    Upload an image <br />
                    <small>Max image size 1MB</small>
                  </Button>
                  <Input
                    type="file"
                    name="myfile"
                    accept="image/*"
                    onInput={(e) => fileReadHandler(e)}
                    {...register("avatarFile")}
                  />
                </div>
                <div className="col-sm-6">
                  <img
                    id="blah"
                    height="150"
                    width="150"
                    className="avatar-preview"
                    src={avt}
                    alt={resumeStore.resume.personal.firstName}
                  />
                </div>
              </div>

              <div className="row mt-4 mb-2">
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                </div>
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>

              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Father Name"
                    {...register("fatherName")}
                  />
                </div>
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    defaultValue="english"
                    type="text"
                    placeholder="hindi, english"
                    {...register("languages", { required: true })}
                  />
                </div>
              </div>

              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      type="email"
                      className="form-control form-control-sm"
                      id="exampleFormControlInput1"
                      placeholder="email@example.com"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <select
                      className="form-control form-control-sm"
                      defaultValue="Unmarried"
                      id="exampleFormControlSelect1"
                      {...register("maritalStatus")}
                    >
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputDob">
                      <small>DOB</small>
                    </label>
                    <Input
                      type="date"
                      className="form-control form-control-sm"
                      id="inputDob"
                      placeholder="DOB"
                      {...register("dob", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      <small>Mobile</small>
                    </label>
                    <Input
                      type="number"
                      className="form-control form-control-sm"
                      id="exampleFormControlInput1"
                      placeholder="9100000000"
                      {...register("mobileNumber", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2 mb-4">
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Country"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
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
              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="nationality"
                    {...register("nationality", { required: true })}
                  />
                </div>
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="religion"
                    {...register("religion", { required: true })}
                  />
                </div>
              </div>

              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="designation"
                    {...register("designation", { required: true })}
                  />
                </div>
                <div className="col-sm-6">
                  <Input
                    className="form-control form-control-sm"
                    type="url"
                    placeholder="website"
                    {...register("website", { required: true })}
                  />
                </div>
              </div>

              <div className="form-group">
                <Textarea
                  fullWidth
                  className="form-control"
                  placeholder="Bio"
                  rows="3"
                  {...register("bio")}
                ></Textarea>
              </div>

              {/* <h2>Professional</h2> */}

              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <label>Primary Skills</label>
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="eg: account, javascript"
                    {...register("primarySkills", { required: true })}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Other Skills</label>
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="eg: skill, skill2"
                    {...register("secondarySkills", { required: true })}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label>
                    <small>Custom Labels (Primary Skills)</small>
                  </label>
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="eg: Expertise on"
                    {...register("primarySkillsLabel", { required: true })}
                  />
                </div>
                <div className="col-sm-6">
                  <label>
                    <small>Custom Label (Other Skills)</small>
                  </label>
                  <Input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="eg: Familiar With"
                    {...register("secondarySkillsLabel", { required: true })}
                  />
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
            <Button className="btn btn-primary btn-block" type="submit">
              Apply
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ResumeController;
