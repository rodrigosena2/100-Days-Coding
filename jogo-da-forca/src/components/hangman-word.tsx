import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
`

export default function HangmanWord() {
  const word = 'teste'
  const guessedLetters = ['s', 't']

  return  <Wrapper>{word.split('').map((letter, index) => (
    <span 
    style={{borderBottom: '0.1em solid white', height: '50px'}} key={index}>
      <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
      </span>
  ))}</Wrapper>

}
