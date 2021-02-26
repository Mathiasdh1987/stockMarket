import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { colors } from '../utils/globalStyle'

const Wrapper = styled.div`
  background: #00000099;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`
const Title = styled.h2`
  font-size: 2vw;
`

const Box = styled.div<{ show?: boolean }>`
  transform: scale(${(props) => (props.show ? '1' : '0.1')});
  transition: all 2s;
  border: 3px solid ${colors.blue};
  border-radius: 12px;
  position: relative;
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.primaryDark};
  padding: 100px;
`

const Popup = ({ handleClose, show, children, title }: any) => {
  return (
    <Wrapper
      style={{
        display: show ? 'flex' : 'none',
        justifyContent: 'center',
      }}
    >
      <div className="background"></div>
      <Box show={show} style={{ justifyContent: 'space-evenly' }}>
        <Title>{title}</Title>
        {children}
        <Button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            height: '32px',
            width: '32px',
          }}
          onClick={handleClose}
          name="X"
        />
      </Box>
    </Wrapper>
  )
}

export default Popup
