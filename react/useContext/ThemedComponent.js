// ThemedComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div style={{ background: state.theme === 'light' ? '#fff' : '#333', color: state.theme === 'light' ? '#000' : '#fff' }}>
      <h2>Themed Component</h2>
      <p>Current Theme: {state.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
