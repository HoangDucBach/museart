import { createSlice, configureStore } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: { isDarkMode: true },
    reducers: {
        toggleTheme: state => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

const tabSlice = createSlice({
    name: "tab",
    initialState: { tab: "nothing" },
    reducers: {
        toggleTab: (state, action) => {
            state.tab = action.payload
        }
    }
})

const gestureSlice = createSlice({
    name: "gesture",
    initialState: { move: 0 },
    reducers: {
        toggleMove: (state, action) => {
            state.move = action.payload
        }
    }
})

export const { toggleTheme } = themeSlice.actions;
export const { toggleTab } = tabSlice.actions;
export const { toggleMove } = gestureSlice.actions;

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        tab: tabSlice.reducer,
        gesture: gestureSlice.reducer,
    }
})

export default store;