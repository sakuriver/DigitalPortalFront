import React from 'react';
import ReactDOM from 'react-dom'

function App() {
  const value = 'DigitalPortal';
  const element = (
    <div>
       <h1>Hello {value}</h1>
       <h2>It is {new Date().toLocaleDateTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
