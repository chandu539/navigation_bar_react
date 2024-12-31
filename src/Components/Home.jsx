import React, { useState } from 'react';
import './Home.css'

function Home({prop_color}) {
  const [color, setColor] = useState(prop_color);

  const Color_change = (updated_color) => {
    setColor(updated_color);
  };

  return (
    <div  style={{ backgroundColor: color, width: '100vw', height: '100vh', margin: 0 }}>
      <div className='header'>
      <h1>This is the Home page</h1>

      <h1>Click on the below button to change BackgroundColor</h1>
      </div>
      <div className='btn_form'>
        <div className='box'> 
        <button className='red' onClick={() => Color_change('red')}>Red</button>
        <button className='blue' onClick={() => Color_change('blue')}>Blue</button>
        <button className='grey' onClick={() => Color_change('grey')}>Grey</button>
        </div>
        <br />
        <div className='box'>
        <button className='yellow' onClick={() => Color_change('yellow')}>Yellow</button>
        <button className='pink' onClick={() => Color_change('pink')}>Pink</button>
        <button className='purple' onClick={() => Color_change('purple')}>Purple</button>
        </div>
        <br />
        <div className='box'>
        <button className='black' onClick={() => Color_change('black')}>Black</button>
        <button className='gold' onClick={() => Color_change('gold')}>Gold</button>
        <button className='green' onClick={() => Color_change('green')}>Green</button>
        </div>
        <br />
        <div className='box'>
        <button className='silver' onClick={() => Color_change(prop_color)}>Prop color</button>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
