// ThemeContext.js
import { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  theme: 'light',
};

// Define the reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// Create the context
const ThemeContext = createContext();

// Create a custom hook to simplify using the context and reducer
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create the context provider component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Wrap the dispatch function to log actions (optional)
  const loggingDispatch = (action) => {
    console.log(`Action: ${action.type}`);
    dispatch(action);
  };

  return (
    <ThemeContext.Provider value={{ state, dispatch: loggingDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
