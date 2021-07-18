
import React from "react";
import experienceStore from "./experienceStore";
import resumeStore from "./resumeStore";

class RootStore {
    constructor() {
        this.resumeStore = new resumeStore(this);
        this.experienceStore = new experienceStore(this);

        // call init method on all child classes
        // use a loop if there are to many classes
        // this.resumeStore.init()
        // this.experienceStore.init()
    }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);