import { observer } from 'mobx-react-lite'
import useTranslation from 'next-translate/useTranslation'

function PageHome() {
  const { t, lang } = useTranslation('common')
  const name = t('name')

  return <div>{name}</div> // <div>Using a variable 42</div>
}

export default observer(PageHome)
