import './App.css';
import React from 'react';
import List from './list';
import JsonFetch from './jsonFetch';

function App() {

  return (
    <>
      <div className="task">useEffect</div>
      <List />
      <div className="task">useJsonFetch</div>
      <JsonFetch />
    </>
  );
}

export default App;