import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor: 'pink'};
  width: 120px;
  height: 60px;

  &:hover {
    background-color: #c0e7ff;
  }
`