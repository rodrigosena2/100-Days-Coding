import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(0)
  const [data, setData] = useState('')

  // Que vai executar sempre.
  /*
  useEffect(() => {
    console.log('executa sempre')
  })
  */

  // executa ao iniciar
  /*
  useEffect(() => {
    console.log('executa na primeira vez que a página carrega')
  }, [])
  */

  // executa sempre que um estado especifico é alterado
/*  useEffect(() => {
    console.log('executa sempre que um estado especifico é alterado')
  }, [count])


  //
  useEffect(() => {
    
    const timer = setTimeout(() => {
      console.log(`O count foi executado ${count}`)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [count])
  */

  // Caso Real - Request API
  useEffect(() => {
    fetch('https://api.github.com/users/rodrigosena2/repos')
    .then(res => res.json())
    .then((data) => setData(data))

  }, [])

  console.log(data)
  if(!data) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>Repos: {data.map((repo) => repo.full_name)}</h3>
     <div className='card'>
      <p>Foi renderizado {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>
      <div className='card'>
      <p>Foi renderizado {countB}</p>
      <button onClick={() => setCountB((count) => count + 1)}>RenderB</button>
      </div>
     </div>
  )
}

export default App
