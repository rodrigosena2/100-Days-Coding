import styled from 'styled-components'
import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`

function App() {
  return (
    <Wrapper>
    <HangmanPart>
        <h2>Front Beginners - Jogo da forca</h2>
        <HangmanDrawing/>
        <HangmanWord />
    </HangmanPart>
    <Keyboard />
    </Wrapper>
  )
}

export default App
