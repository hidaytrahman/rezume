class experienceStore {

    experienceList = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    init() {
        // safe to access other stores
        this.rootStore.resumeStore.sayHi()

        this.experienceList = this.rootStore.resumeStore.resume.experience.list;
    }

    sayHello() {
        console.log('I am experiuence store')
    }

    // EXPERIENCE
    addExperience(data) {
        this.experienceList.push(data);
    }

    deleteExperience(index) {
        this.experienceList.splice(index, 1);
        console.log(' this.experienceList ', this.experienceList);
    }
}

export default experienceStore;