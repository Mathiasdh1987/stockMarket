import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Button from './Button'
import fire from '../config/fire-config'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const SignUpForm = styled.form`
  // background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  input {
    margin-bottom: 24px;
    min-width: 100%;
  }
`

const Notification = styled.div<{ isActive: boolean }>`
  border-radius: 12px;
  z-index: 0;
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

const SignUp = () => {
  const router = useRouter()
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')
  const [notification, setNotification] = useState('')
  const [error, isError] = useState<boolean>(false)

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (password !== passConf) {
      isError(true)
      setNotification('Password confirmation does not match')
      setTimeout(() => {
        isError(false)
        setTimeout(() => {
          setNotification('')
        }, 500)
      }, 3000)
      setPassword('')
      setPassConf('')
      return null
    }

    fire
      .auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message)
        isError(true)
        setNotification(err.message)
        setTimeout(() => {
          isError(false)
          setTimeout(() => {
            setNotification('')
          }, 500)
        }, 3000)
      })
    router.push('/')
  }
  return (
    <Wrapper>
      <Notification isActive={error}>{notification}</Notification>
      <SignUpForm onSubmit={handleLogin}>
        <input
          type="text"
          value={userName}
          placeholder="Email"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <input
          type="password"
          value={passConf}
          placeholder="Password confirmation"
          onChange={({ target }) => setPassConf(target.value)}
        />

        <Button name="Sign up" onClick={handleLogin} type="button"></Button>
      </SignUpForm>
    </Wrapper>
  )
}

export default SignUp
