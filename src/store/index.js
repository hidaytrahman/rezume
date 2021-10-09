
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./slice/resumeSlice";

const store = configureStore({
    reducer: {
        resume: resumeReducer
    }
});

export default store;