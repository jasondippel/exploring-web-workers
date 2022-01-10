import React from 'react';
import './App.css';

function App() {
  const worker = new Worker(new URL('./life.worker.js', import.meta.url));

  worker.postMessage({
    question:
      'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
  });

  worker.onmessage = ({ data: { answer } }) => {
    console.log(answer);
  };

  return (
    <div className="App">
      Look at the console...
    </div>
  );
}

export default App;
