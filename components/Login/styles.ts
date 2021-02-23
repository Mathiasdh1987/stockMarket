import styled from 'styled-components'
import { colors, media } from '../../utils/globalStyle'
import SvgLogoSmall from '../../public/icons/SvgLogoSmall'

export const Wrapper = styled.div`
  // position: relative;
  // display: inline - block;
  // display: flex;
  // align-items: center;
  // height: 64px;
  // color: ${colors.black};
`

export const Button = styled.button`
  background: none;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  outline: 0;
`

export const Avatar = styled(SvgLogoSmall)`
  background: black;
  border-radius: 50%;
  transition: all 0.2s;

  :hover {
    transform: scale(1.2);
    background: ${colors.blue};
  }
`

export const Dropdown = styled.div<{ isActive?: boolean }>`
border-radius: 0 12px 12px 0;
background: ${colors.primary};
 position: absolute;
 top: 0;
 z-index: 2;
 left: 100%;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.14);
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  width: ${(props) => (props.isActive ? '400px' : '0')};
  transition: all 0.5s;
  transition-delay: ${(props) => (props.isActive ? '0s' : '0.2s')};
  
  form {
    transition: 0.5s;
    opacity: ${(props) => (props.isActive ? '1' : '0')};
    transition-delay: ${(props) => (props.isActive ? '0.5s' : '0s')};
  }
}`

export const LoginDiv = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.lg} {
      flex-direction: column;
    }
  }

  p {
    font-weight: 900;
    margin-bottom: 10px;
  }

  input {
    border: none;
    margin: 0 0 10px 10px;
    border-radius: 10px;
    padding: 5px 5px 5px 10px;
    font-size: 1vw;

    :focus {
      outline: none;
      background: ${colors.blue};
    }
  }
  button {
    font-size: 100%;
    font-weight: 900;
    padding: 10px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background: ${colors.blue};
    margin: 0 25%;
    transition: all 0.2s ease-in;

    :hover {
      transform: scale(1.1);
    }
  }
`
export const Notification = styled.div<{ isActive: boolean }>`
  border-radius: 12px;
  margin: 0 10% 10px 10%;
  padding: 5px;
  color: white;
  background: ${(props) => (props.isActive ? 'red' : 'transparent')};
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transition: ${(props) => (props.isActive ? '1s' : '0.5s')};

  ${(props) =>
    props.isActive
      ? '  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;'
      : ''}
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`
