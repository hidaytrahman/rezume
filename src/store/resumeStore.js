import { standard_resume } from "./_proto_resume";
import { short_resume, test_resume } from "./_proto_short_resume";

class resumeStore {

    resume = standard_resume;

    constructor(rootStore) {
        this.rootStore = rootStore;

        // save on load
        this.save();
    }

    save() {
        localStorage.setItem("resume", JSON.stringify(this.resume))
    }

    getResume() {
        return this.resume;
    }

    updateResume(formData) {

        //const newObj = { ...this.resume, extra: ["hidauy"]};

        const source = {
            personal: {
                firstName: "Vikas",
                lastName: "Barwas",
                email: "viku@mail.com",
                mobile: ["123454564"],
                languages: ["arabic"],
                avatar: "https://assets.codepen.io/421482/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1625678511&width=80",
                designation: "HTML Developer"
            }
        }

        // const newobj = Object.assign(this.resume, source);

        const resumeCloned = {
            ...this.resume,          //copy everything from this.resume
            personal: {        //override the user property
               ...this.resume.personal,  //same sane: copy the everything from a.user
               firstName: formData.firstName,  //override a.user.group
               lastName: formData.lastName,
               email: formData.email,
               religion: formData.religion,
               nationality: formData.nationality,
               maritalStatus: formData.maritalStatus, 
               bio: formData.bio,
               mobile: ["123454564"],
               dob: formData.dob,
               address: formData.address,
               website: formData.website,
               
               languages: formData.languages.split(",") || ["arabic"],
               avatar: formData.avatar || "https://assets.codepen.io/421482/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1625678511&width=80",
               designation: formData.designation
            }
          }

          this.resume = resumeCloned;
          // console.log('newobj ', newobj);
          console.log('resumeCloned ', resumeCloned);

    }

    resetResume() {

    }

    downloadAsJson() {

    }
}

export default resumeStore;