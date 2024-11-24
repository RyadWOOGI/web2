import { useState } from 'react'
import './App.css'
import RandomDog from './RandomDog'

const App = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <RandomDog key={`${refresh}1`} />
      <RandomDog key={`${refresh}2`} />
      <RandomDog key={`${refresh}3`} />
    </div>

    <button onClick={() => setRefresh(!refresh)}>
      Refresh Dogs
    </button>
    </>
  );
}

export default App
