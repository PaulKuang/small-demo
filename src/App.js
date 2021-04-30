import React from 'react';
import Counter from './Counter'

function App() {
  console.log("Render App")
  return (
    <Counter initialCount={1} />
  )
}

export default App;
