import React, { useState, useEffect, CSSProperties } from 'react'
import { useRouter } from 'next/router'
import SignUp from '../../SignUp'
import Button from '../../Button'
import Popup from '../../Popup'
import {
  Wrapper,
  Avatar,
  ToolButton,
  Dropdown,
  StyledDiv,
  StyledForm,
  Notification,
} from './styles'
import fire from '../../../config/fire-config'

export default function Login(props: any) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notify, setNotification] = useState('')
  const [error, isError] = useState<boolean>(false)
  const router = useRouter()
  const [open, isOpen] = useState<boolean>(false)
  const [popup, showPopup] = useState<boolean>(false)
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [uid, setUid] = useState<String>('')
  // const [loading, isLoading] = useState<boolean>(false)
  // const [activeUser, setActiveUser] = useState(Object)
  // const [userName, setUserName] = useState<String>('')

  const { user, loggedIn } = props

  // console.log(props.user)
  // useEffect(() => {
  //   //   fire.auth().onAuthStateChanged((user) => {
  //   //     if (user) {
  //   //       // setActiveUser(user)
  //   //       setUserName(props.user.email!)
  //   //       setUid(props.user.uid!)
  //   //       setLoggedIn(true)
  //   //       showPopup(false)
  //   //       setTimeout(() => {
  //   //         isOpen(false)
  //   //         // console.log('logged in:', user)
  //   //         // console.log(activeUser)
  //   //       }, 1000)
  //   //     } else {
  //   //       setLoggedIn(false)
  //   //       // console.log('User Logged Out')
  //   //     }
  //   //   })
  // }, [])

  const handleButtonClick = () => {
    if (!open) {
      isOpen(true)
    } else isOpen(false)
  }
  const togglePopup = () => {
    if (!popup) {
      showPopup(true)
    } else showPopup(false)
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
        }, 5000)
      })
    setUsername('')
    setPassword('')
    setTimeout(() => {
      isOpen(false)
    }, 1000)
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
          isOpen(false)
        }, 1000)
      })
    // setActiveUser('')
    // setUid('')
  }

  return (
    <Wrapper>
      <ToolButton onClick={handleButtonClick} type="button" className="button">
        <Avatar image="" />
      </ToolButton>
      <Dropdown style={dropdownStyle} isActive={open} className="dropdown">
        <div className="login">
          {!loggedIn ? (
            <div>
              <StyledForm>
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
                  <Button
                    name="Login"
                    primary
                    handleAction={handleLogin}
                    type="submit"
                  />
                  <Button onClick={togglePopup} name="Sign up" type="button" />
                </div>
              </StyledForm>
              {popup ? (
                <Popup
                  title="Sign up for free"
                  show={showPopup}
                  handleClose={togglePopup}
                >
                  <SignUp />
                </Popup>
              ) : (
                ''
              )}
            </div>
          ) : (
            <StyledDiv>
              <h1>Welcome</h1>
              <div>
                <p>LoginName: </p>
                <p>{user.email}</p>
              </div>
              <div>
                <p>UID: </p>
                <p>{user.uid}</p>
              </div>
              <Button onClick={handleLogout} name="Logout" />
            </StyledDiv>
          )}{' '}
        </div>
        <Notification isActive={error}>{notify}</Notification>
      </Dropdown>
    </Wrapper>
  )
}
