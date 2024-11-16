import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create a Context
const AppContext = createContext();

// Step 2: Define the initial state and reducer function
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Step 3: Create a Context Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Step 4: Create custom hooks for using the context
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Step 5: Use the AppProvider in your app
const App = () => {
  return (
    <AppProvider>
      <Counter />
    </AppProvider>
  );
};

// Step 6: Use useContext and useReducer in a component
const Counter = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default App;