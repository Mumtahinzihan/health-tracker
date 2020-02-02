import React, { useState } from 'react';
import './App.css';
import Water from './Water';

function App() {
  let [title, setTitle] = useState(localStorage.getItem('Mode'));

  let handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Mode', title);
  }
  return (
    <div className="App">
      <h1>HEALTH TRACKER</h1>
      <form type='submit'>
        <h2>Please enter your Mode</h2>
        <select className='modes'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option></option>
          <option>I am Good</option>
          <option>I am Normal</option>
          <option>I am Crying</option>
          <option>I am Worried</option>
          <option>I am Feeling bad</option>
          <option>I am Feeling Extreme bad</option>
          <option>I need Ambulence</option>
        </select>
        <h4>Status: <em>{title}</em></h4>
        <button onClick={e => handleSubmit(e)}>SEND</button>
        <Water />
      </form>
    </div>
  );
}

export default App;
