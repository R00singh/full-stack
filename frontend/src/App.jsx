import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const[jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[])
  return (
    <>
      <h1>OUR JOKES</h1>
    <p>JOKES: {jokes.length}</p>
    {
      jokes.map((jok) => (
        <div key={jok.id}>
          <h3>{jok.name}</h3>
          <p>{jok.joke}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
