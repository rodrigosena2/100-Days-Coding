import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const countRef = useRef(0)

  const timeToCallSomething = useRef(null)

  const FetchSomething = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${textInput}`)
      .then((res) => res.json())
      .then((data) => setData(data.results))
  }

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    console.log(timeToCallSomething.current)
    if (timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current)
    }
    timeToCallSomething.current = setTimeout(FetchSomething, 1000)

    return () => clearInterval(timeToCallSomething.current)
  }, [textInput])


  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div className="card">
        <p>Contador Original:{count}</p>
        <p>Contador Referência:{countRef.current}</p>
        <form>
          <input name='name' value={textInput} onChange={(e) => { setTextInput(e.target.value) }} />
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
