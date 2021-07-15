
import React from "react";
import resumeStore from "./resumeStore";

class RootStore {
    constructor() {
        this.resumeStore = new resumeStore(this)
    }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);