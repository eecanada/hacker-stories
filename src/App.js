import React from 'react';
import Test from './components/test';

function App() {
  const names = ['eder', 'ben']
  const hobby = ['code', 'run']
  const [text, setText] = React.useState('');

  function handleChange(event, delta) {
    setText(event.target.value);
    console.log(delta);
  }

  return (
    <div>
      <input type="text" onChange={(event) => handleChange(event, 1)} />

      {text}

      <Test names={names} hobby={hobby}/>
    </div>
  );
}

export default App;
