import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
// import useTranslation from 'next-translate/useTranslation'
// import Link from 'next/link'
// import { Console } from 'console'
import { Wrapper, Tools } from './styles'
// import CreatePost from '../../components/CreatePost'
// import ReadPost from '../../components/ReadPost'
// import ReadSymbol from '../../components/ReadSymbol'
import Login from '../../components/Tools/Login'
// import fire from '../../config/fire-config'

const Toolbar = (props: any) => {
  // const { t } = useTranslation()
  // const [notification, setNotification] = useState('')
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [activeUser, setActiveUser] = useState(Object)

  const { loggedIn, user } = props

  // useEffect(() => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setActiveUser(user)
  //     } else {
  //       setActiveUser(null)
  //     }
  //     if (user) {
  //       console.log('logged in:', user)
  //       setActiveUser(user)
  //       setUserName(user!.email!)
  //       setUid(user!.uid!)
  //       setLoggedIn(true)
  //       showPopup(false)
  //     } else {
  //       setLoggedIn(false)
  //       console.log('User Logged Out')
  //     }
  //   })
  // }, [])

  // const getUserData = () => {
  //   return (
  //     <div>
  //       <h1>Data:</h1>
  //       <div>User: {activeUser}</div>
  //       <div>UID: {uid}</div>
  //     </div>
  //   )
  // }

  // useEffect(() => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setActiveUser(user)
  //     }
  //     console.log(activeUser)
  //   })
  // }, [activeUser])
  //   if (user) {
  //     setLoggedIn(true)
  //     setActiveUser(user!.email!)
  //     setUid(user!.uid!)
  //   } else {
  //     setLoggedIn(false)
  //     setActiveUser('')
  //     setUid('')
  //   }
  // })

  // const handleLogout = () => {
  //   fire
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setNotification('Logged out')
  //       setTimeout(() => {
  //         setNotification('')
  //       }, 2000)
  //     })
  //   setActiveUser('')
  //   setUid('')
  // }

  // useEffect(() => {
  //   return getUserData()
  // }, [getUserData])

  return (
    <Wrapper id="dashboard">
      <Row style={{ height: '100%' }}>
        <Tools style={{ padding: '0' }} lg={1} id="tools">
          <Login user={user} loggedIn={loggedIn} />
        </Tools>
        <Col lg={11} id="content">
          <Container>
            <Row>
              <Col lg={1}></Col>
              <Col lg={11}>
                <div>
                  {user ? (
                    <h1 style={{ fontSize: '3vw' }}>Hello {user.email} </h1>
                  ) : (
                    <h1 style={{ fontSize: '3vw' }}>DashBoard</h1>
                  )}
                  {/* {getUserData()} */}
                  {/* <ReadPost /> */}
                  {/* {loggedIn && <CreatePost />} */}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Toolbar
