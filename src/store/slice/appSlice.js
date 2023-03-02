import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "resume",
  initialState: {
    currentView: "/",
  },
  reducers: {
    setCurrentView(state, action) {
      return (state.currentView = action.payload);
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
