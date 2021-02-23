import React, { useState, useEffect, useRef, CSSProperties } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Wrapper,
  Avatar,
  Button,
  Dropdown,
  LoginDiv,
  StyledForm,
  Notification,
} from './styles'
import fire from '../../config/fire-config'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notify, setNotification] = useState('')
  const [error, isError] = useState<boolean>(false)
  const router = useRouter()
  const [open, isOpen] = useState<boolean>(false)
  const wrapperRef = useRef(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [uid, setUid] = useState<String>('')
  const [activeUser, setActiveUser] = useState<String>('')

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true)
      setActiveUser(user!.email!)
      setUid(user!.uid!)
    } else {
      setLoggedIn(false)
    }
  })

  const handleButtonClick = () => {
    if (!open) {
      isOpen(true)
    } else isOpen(false)
  }

  const dropdownStyle: CSSProperties = {
    // width: open ? '100px' : '',
    // transition: '1s',
    // background: 'none',
  }

  const handleLogin = (e: any) => {
    e.preventDefault()
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
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
    setUsername('')
    setPassword('')
    router.push('/')
  }

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification('Logged out')
        setTimeout(() => {
          setNotification('')
        }, 2000)
      })
    setActiveUser('')
    setUid('')
  }

  // const handleClickOutside = (e: MouseEvent) => {
  //   // @ts-ignore
  //   if (wrapperRef?.current && wrapperRef.current.contains(e.target)) {
  //     return
  //   }
  //   isOpen(false)
  // }

  // useEffect(() => {
  //   if (open) {
  //     document.addEventListener('mousedown', handleClickOutside)
  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [open])

  return (
    <Wrapper>
      <Button onClick={handleButtonClick} type="button" className="button">
        <Avatar />
      </Button>
      {/* {open && ( */}
      <Dropdown style={dropdownStyle} isActive={open} className="dropdown">
        <LoginDiv className="login">
          {!loggedIn ? (
            <StyledForm onSubmit={handleLogin}>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <button type="submit">Login</button>
              <Link href="/users/register">
                <a>Register</a>
              </Link>{' '}
            </StyledForm>
          ) : (
            <div>
              <p>Hallo {activeUser}</p>
              <p>UID: {uid}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}{' '}
        </LoginDiv>
        <Notification isActive={error}>{notify}</Notification>
      </Dropdown>
      {/* )} */}
    </Wrapper>
  )
}