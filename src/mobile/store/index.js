import { createSlice, configureStore } from "@reduxjs/toolkit"; 

const themeSlice = createSlice({
    name: "theme",
    initialState: { isDarkMode: false },
    reducers: {
        toggleTheme: state => {
            state.isDarkMode = !state.isDarkMode;
            console.log(state);
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
    reducer: themeSlice.reducer
})

export default store;