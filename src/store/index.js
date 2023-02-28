import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "store/slice/resumeSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;
