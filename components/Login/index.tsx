import React, { useState, CSSProperties } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Wrapper,
  Avatar,
  ToolButton,
  Dropdown,
  StyledDiv,
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
  // const wrapperRef = useRef(null)
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
      <ToolButton onClick={handleButtonClick} type="button" className="button">
        <Avatar />
      </ToolButton>
      {/* {open && ( */}
      <Dropdown style={dropdownStyle} isActive={open} className="dropdown">
        <div className="login">
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
              <div>
                <button type="submit">Login</button>
                <Link href="/users/register">
                  <a>Register</a>
                </Link>{' '}
              </div>
            </StyledForm>
          ) : (
            <StyledDiv>
              <h1>Welcome</h1>
              <div>
                <p>LoginName: </p>
                <p>{activeUser}</p>
              </div>
              <div>
                <p>UID: </p>
                <p>{uid}</p>
              </div>
              <button onClick={handleLogout}>Logout</button>
            </StyledDiv>
          )}{' '}
        </div>
        <Notification isActive={error}>{notify}</Notification>
      </Dropdown>
      {/* )} */}
    </Wrapper>
  )
}
