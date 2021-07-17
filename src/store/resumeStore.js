import { standard_resume } from "./_proto_resume";
import { short_resume, test_resume } from "./_proto_short_resume";
import  { getLocalStorage } from "hotdom";
class resumeStore {

    resume = getLocalStorage('resume') || standard_resume;

    expList = [];

    constructor(rootStore) {
        this.rootStore = rootStore;

       // this.experienceStore = this.rootStore.experienceStore;

        console.log(' this.experienceStore ', this.rootStore)

        // save on load
        //this.save();

        // this.init();
    }

    sayHi() {
        console.log('I am resume store')
    }


    init() {
        // safe to access other stores
        this.rootStore.experienceStore.sayHello();

        this.expList = this.rootStore.experienceStore.experienceList;
        

    }

    save() {
        localStorage.setItem("resume", JSON.stringify(this.resume))
    }

    getResume() {
        return this.resume;
    }

    updateResume(formData) {

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
                designation: formData.designation,

            },
            skills: {
                ...this.resume.skills, // copy of existing skills
                primary: {
                    value: formData.primarySkills.split(","),
                    label: formData.primarySkillsLabel
                },
                secondary: {
                    value: formData.secondarySkills.split(","),
                    label: formData.secondarySkillsLabel
                },
            },
            experience: {
                ...this.resume.experience, // copy of existing experience
                list: this.expList,
                total: 5 // need to calculate
            }
        }

        this.resume = resumeCloned;
        // console.log('newobj ', newobj);
        console.log('resumeCloned ', resumeCloned);

        localStorage.setItem("resume", JSON.stringify(this.resume));

    }

    resetResume() {

    }

    downloadAsJson() {

    }

   
}

export default resumeStore;