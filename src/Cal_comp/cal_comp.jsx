import React, { useState } from 'react';
import './cal.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const clearScrn = () => {
    setResult('');
  };

  const display = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const calc = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult);
    } catch (error) {
      console.log('Error: Invalid expression');
    }
  };

  return (
    <div className="calculator">
      <h1 className="header">Calculator</h1>
      <input className="num-box" type="text" value={result} disabled />

      <div>
        <input type="button" value="7" onClick={() => display('7')} />
        <input type="button" value="8" onClick={() => display('8')} />
        <input type="button" value="9" onClick={() => display('9')} />
        <input type="button" value="/" onClick={() => display('/')} />
      </div>

      <div>
        <input type="button" value="4" onClick={() => display('4')} />
        <input type="button" value="5" onClick={() => display('5')} />
        <input type="button" value="6" onClick={() => display('6')} />
        <input type="button" value="*" onClick={() => display('*')} />
      </div>

      <div>
        <input type="button" value="1" onClick={() => display('1')} />
        <input type="button" value="2" onClick={() => display('2')} />
        <input type="button" value="3" onClick={() => display('3')} />
        <input type="button" value="+" onClick={() => display('+')} />
      </div>

      <div>
        <input type="button" value="." onClick={() => display('.')} />
        <input type="button" value="0" onClick={() => display('0')} />
        <input className="equal" type="button" value="=" onClick={calc} />
        <input type="button" value="-" onClick={() => display('-')} />
      </div>

      <div>
        <input className="clear" type="button" value="clear" onClick={clearScrn} />
      </div>
    </div>
  );
};

export default Calculator;
