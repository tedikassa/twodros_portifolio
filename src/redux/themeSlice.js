import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    // We default to true because dark mode looks more "pro" for devs
    darkMode: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      // Optional: Save to local storage so it remembers user choice on refresh
      localStorage.setItem("portfolio-theme", state.darkMode);
    },
    // Useful if you want to initialize from local storage
    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
