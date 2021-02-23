import { observer } from 'mobx-react-lite'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import IndexDashboard from '../sections/index/IndexDashboard'

function PageHome() {
  // const { t, lang } = useTranslation('common')
  return (
    <>
      <Navigation />
      <IndexDashboard />
      <Footer />
    </>
  )
}
export default observer(PageHome)
