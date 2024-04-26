
const initialState = {
    isDarkMode: false,
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return {
          ...state,
          isDarkMode: !state.isDarkMode,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;