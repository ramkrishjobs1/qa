// App.js
import React from 'react';
import ThemedComponent from './ThemedComponent';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Themed App</h1>
        <ThemedComponent />
        {/* Other components using the theme context */}
      </div>
    </ThemeProvider>
  );
};

export default App;
