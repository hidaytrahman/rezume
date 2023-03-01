import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "store/slice/resumeSlice";
import appReducer from "store/slice/appSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
    app: appReducer,
  },
});

export default store;
