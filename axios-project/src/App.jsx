import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      console.log(res)
      setPokemonList(res.data)
    })
    .catch((err) => console.log(err))

  return (
    <div className="App">
      Front Beginners
    </div>
  )
}

export default App
