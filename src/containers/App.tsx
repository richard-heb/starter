import React from 'react';

const App: React.FC = (props) => {
  return (
    <div className="app">
      {props.children}
    </div>
  );
}

export default App;