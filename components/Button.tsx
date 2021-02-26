import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/globalStyle'

const StyledButton = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? colors.blue : 'transparent')};
  border: ${(props) => (props.primary ? 'none' : '1px solid white')};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  font-weight: 900;
  padding: 10px;
      border-radius: 12px;
      cursor: pointer;
      // background: ${colors.blue};
      transition: transform 0.2s ease-in;

      :hover {
        transform: scale(1.1);
      }
  }
`

const Button = (props: any) => {
  return (
    <StyledButton onClick={props.handleAction} {...props}>
      {props.name}
    </StyledButton>
  )
}
export default Button
