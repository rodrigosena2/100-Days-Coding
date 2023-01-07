import './App.css'
import { useState } from 'react'
import Modal from './components/modal'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <h2>Front Beginners - Modal</h2>
      <button onClick= {() => setOpenModal(true)}>Abrir o modal</button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
       Conteúdo do Modal
      </Modal>
    </div>
  )
}

export default App
