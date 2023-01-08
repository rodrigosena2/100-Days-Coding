import './App.css'
import {useState} from 'react'

function FrontBeginnersApp() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  
  const handleClick = () => {
    setCount((count) => count + 1)
    setShowText(!showText)
  }

  return (
    <div className='App'>
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Clique</button>
      {showText && <p>Bem-vindo ao melhor canal de front-end</p>}
    </div>
  )
}

export default FrontBeginnersApp
