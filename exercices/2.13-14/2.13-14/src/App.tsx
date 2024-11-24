import { useEffect, useState} from 'react'
import './App.css'

const App = () => {
  const [joke, setJoke] = useState({ category: '', setup: '', delivery: '' });

  useEffect(() => {
    const interval = setInterval(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json();
      })
      .then((data) => {
        setJoke({ category: data.category, setup: data.setup, delivery: data.delivery });
      })
      .catch((error) => console.error(error));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>{joke.category}</h1>
      <h2>{joke.setup}</h2>
      <h3>{joke.delivery}</h3>
    </div>
  );
}

export default App
