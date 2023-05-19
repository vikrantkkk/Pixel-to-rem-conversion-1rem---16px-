import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [pixelValue, setPixelValue] = useState(16);
  const [remValue, setRemValue] = useState(1);

  const handleInput1 = (e) => {
    let value = e.target.value;
    setPixelValue(value);
    setRemValue(value / 16);
  };
  const handleInput2 = (e) => {
    let value = e.target.value;
    setRemValue(value);
    setPixelValue(value * 16);
  };

  return (
    <div className="container">
      <div>
        <h2>PX to REM convereter</h2>
      </div>
      <div className="text">
        <p>Px</p>
        <p>Rem</p>
      </div>
      <div>
        <input
          placeholder="PX"
          type="number"
          value={pixelValue}
          onChange={handleInput1}
        />{' '}
        <span className="arrow">⇄</span>
        <input
          placeholder="REM"
          type="number"
          value={remValue}
          onChange={handleInput2}
        />
      </div>
    </div>
  );
}
