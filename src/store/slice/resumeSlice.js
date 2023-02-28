import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "hotdom";
import { standard_resume } from "store/proto/_proto_resume";
import { saveTemplateAsFile } from "core/utils";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resume: getLocalStorage("resume") || standard_resume,
  },
  reducers: {
    save() {
      localStorage.setItem("resume", JSON.stringify(this.resume));
    },

    getResume() {
      return this.resume;
    },

    updateResume(state, action) {
      const formData = action.payload;

      const resumeCloned = {
        ...state.resume, //copy everything from this.resume
        personal: {
          //override the user property
          ...state.resume.personal, //same sane: copy the everything from resume.personal
          firstName: formData.firstName, //override resume.personal.firstName
          lastName: formData.lastName,
          email: formData.email,
          religion: formData.religion,
          nationality: formData.nationality,
          maritalStatus: formData.maritalStatus,
          bio: formData.bio,
          mobile: formData.mobile,
          dob: formData.dob,
          address: formData.address,
          website: formData.website,

          languages: formData.languages.split(",") || ["arabic"],
          avatar:
            formData.avatar ||
            "https://assets.codepen.io/421482/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1625678511&width=80",
          designation: formData.designation,
        },
        skills: {
          ...state.resume.skills, // copy of existing skills
          primary: {
            value: formData.primarySkills.split(","),
            label: formData.primarySkillsLabel,
          },
          secondary: {
            value: formData.secondarySkills.split(","),
            label: formData.secondarySkillsLabel,
          },
        },
      };

      state.resume = resumeCloned;

      console.log("resumeCloned ", resumeCloned);

      localStorage.setItem("resume", JSON.stringify(state.resume));
    },

    updateEducation(state, action) {
      console.log(" eduData ", action.payload);
      state.resume.education.push(action.payload);
    },
    deleteEducation(state, action) {
      state.resume.education.splice(action.payload, 1);
    },
    updateExperience(state, action) {
      state.resume.experience.list.push(action.payload);
    },
    deleteExperience(state, action) {
      state.resume.experience.list.splice(action.payload, 1);
    },
    resetResume() {
      // do something
    },
    downloadAsJson(state) {
      // Deep clone of resume
      const resumeToDownload = Object.assign({}, state.resume);
      // remove avatar
      delete resumeToDownload["personal"]["avatar"];
      // download
      saveTemplateAsFile("rezume.json", resumeToDownload);
    },
  },
});

export const resumeActions = resumeSlice.actions;
export default resumeSlice.reducer;
