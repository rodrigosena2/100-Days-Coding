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

interface HangmanWordProps {
  reveal: boolean
  word: string
  guessedLetters: string[]
}

export default function HangmanWord({ reveal, word, guessedLetters }: HangmanWordProps) {

  return <Wrapper>{word.split('').map((letter, index) => (
    <span
      style={{
        borderBottom: '0.1em solid white',
        height: '50px',
        minWidth: '50px'
      }}
      key={index}>
      <span
        style={{
          visibility: guessedLetters.includes(letter) || reveal
            ? 'visible'
            : 'hidden',
            color: !guessedLetters.includes(letter) && reveal ? 'red' : '#fff',
        }}
      >
        {letter}
      </span>
    </span>
  ))}</Wrapper>

}
