import React from 'react'
import { observer } from 'mobx-react-lite'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Toolbar from '../sections/index/Toolbar'
import fire from '../config/fire-config'

function PageHome() {
  const [activeUser, setActiveUser] = React.useState(Object)
  const [loggedIn, isLoggedIn] = React.useState<boolean>(false)

  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setActiveUser(user)
        isLoggedIn(true)
        // console.log('logged in:', user)
      } else {
        setActiveUser('')
        isLoggedIn(false)
        // console.log('User Logged Out')
      }
    })
  })

  // const { t, lang } = useTranslation('common')
  return (
    <>
      <Navigation />
      <Toolbar user={activeUser} loggedIn={loggedIn} />
      {/* <Dashboard user={activeUser} /> */}
      <Footer />
    </>
  )
}
export default observer(PageHome)
