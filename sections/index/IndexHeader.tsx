import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Wrapper } from './styles'

const IndexHeader = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <div
        style={{
          fontSize: '3vw',
        }}
      >
        {t(`common:name`)}
      </div>
    </Wrapper>
  )
}

export default IndexHeader
