import styled from 'styled-components'
import { theme } from '../Theme'
import ButtonStyled from './Button'

export const Button = styled.button`
  background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor: 'pink'};
  width: 120px;
  height: ${({ theme }) => theme.size.xxl};

  &:hover {
    background-color: #289be2;
  }
`

export const Button2 = styled(ButtonStyled)`
  background-color: ${({theme}) => theme.colors.secondary};
  width: 120px;
  height: 60px;
`