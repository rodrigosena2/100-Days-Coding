import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Front Beginners')

  return (
    <>
      <div className='App'>{name}</div>
      <ChildrenOne />
    </>
  )
}

function ChildrenOne() {
  return <ChildrenOne />
}

function ChildrenTwo() {
  return (
    <button onClick={() => setName('Carlinhos da Massa')}>Mude o nome</button>
  )
}

export default App
