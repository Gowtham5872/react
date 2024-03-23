import React from 'react';
import Cart from './components/Shopping';
import './App.css'
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState([]);

  return (
    <div>
      <div className='navbar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
        <button className='btn'>Cart {state.length}</button>
      </div>
      <div className='heading'>
        <p className='heading-para'> Shop in Your Own Style</p>
      </div>
      <Cart state={state} setState={setState} />
    </div>
  );
}

export default App;

