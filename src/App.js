import React from 'react';

function App() {
  const value = 'DigitalPortal';
  const element = (
    <div>
       <h1>Hello {value}</h1>
       <h2>It is {new Date().toLocaleDateTimeString()}</h2>
    </div>
  );
  return element;
}

export default App;
