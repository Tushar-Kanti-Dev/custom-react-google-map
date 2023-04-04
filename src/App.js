
import { useState } from 'react';
import './App.css';
import Direction from './components/Direction/Direction';
import MyLocation from './components/MyLocation/MyLocation';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const displayDestination = event =>{
    event.preventDefault();
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setOrigin(start);
    setDestination(end);
  }
  return (
    <div className="App">
      <form onSubmit={displayDestination}>
        <input type="text" name='origin' placeholder='Your locaton' required/>
        <br />
        <input type="text" name="destination" id="" placeholder='destination' required />
        <br />
        <input type="submit" value='Click' name="" id="" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
      {/* <MyLocation></MyLocation> */}
    </div>
  );
}

export default App;
