import { useCallback, useEffect, useState } from 'react'
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

const words = ['caminhao', 'onibus', 'pneu','farol', 'buzina','assento', 'automovel','motocicleta']

function App() {
  const [wordToGuess, setWordTogGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessesLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const correctGuesses = guessedLetters.filter(
    (letter) => wordToGuess.includes(letter)
  )

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback((letter: string) => {
    console.log('letra:', letter, guessedLetters)
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessesLetters((guessedLetters) => [... guessedLetters, letter] )
  }, 
  [guessedLetters, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener

    document.addEventListener('keypress', handler)

    return (() => {
      document.removeEventListener('keypress', handler)
    })
  }, [guessedLetters])



  return (
    <Wrapper>
    <HangmanPart>
      {isLoser && 'Você perdeu! atualize a página'}
      {isWinner && 'Parabéns você venceu!!!  Atualize para jogar novamente!'}
        <h2>Front Beginners - Jogo da forca - Tema Veículos no geral</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length}/>
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} word={wordToGuess}/>
    </HangmanPart>
    <Keyboard
      disabled={isLoser || isWinner}
      activeLetters={correctGuesses}
      inactiveLetters={incorrectGuesses}
      addGuessedLetters={addGuessedLetters}
    />
    </Wrapper>
  )
}

export default App
