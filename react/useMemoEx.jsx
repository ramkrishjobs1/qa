import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = ({ data }) => {
  // Expensive calculation function
  const performExpensiveCalculation = (data) => {
    console.log('Performing expensive calculation...');
    // Simulating a time-consuming operation
    return data.map(item => item * 2);
  };

  // Use useMemo to memoize the result of the expensive calculation
  const memoizedResult = useMemo(() => performExpensiveCalculation(data), [data]);

  return (
    <div>
      <h2>Expensive Calculation Component</h2>
      <p>Original Data: {JSON.stringify(data)}</p>
      <p>Memoized Result: {JSON.stringify(memoizedResult)}</p>
    </div>
  );
};

const App = () => {
  const [inputData, setInputData] = useState([1, 2, 3, 4, 5]);

  const handleInputChange = () => {
    // Simulating a change in the input data
    setInputData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  return (
    <div>
      <h1>React useMemo Example</h1>
      <button onClick={handleInputChange}>Change Input Data</button>
      <ExpensiveCalculationComponent data={inputData} />
    </div>
  );
};

export default App;