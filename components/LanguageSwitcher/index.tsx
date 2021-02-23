import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import {
  Wrapper,
  Select,
  Flag,
  Lang,
  Caret,
  StyledLink,
  Options,
  Option,
  Selected,
} from './styles'

import { locales } from '../../i18n.json'
import { langToISO, langToEmojiFlag } from '../../utils/utils'

export default function LanguageSwitcher(props: any) {
  const [isOpen, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  const router = useRouter()
  const { t, lang } = useTranslation()

  let flag = langToEmojiFlag(lang)
  if (lang === 'de') {
    flag = langToEmojiFlag('de')
  } else if (lang === 'en') {
    flag = langToEmojiFlag('en-us')
  }

  let currentPath: string

  if (router.pathname.includes('[slug]')) {
    currentPath = '/blog'
  } else {
    currentPath = router.asPath.replace(`/${lang}`, '')
    if (!currentPath) currentPath = '/'
  }

  const handleClickOutside = (e: MouseEvent) => {
    // @ts-ignore
    if (wrapperRef?.current && wrapperRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <Wrapper ref={wrapperRef} {...props}>
      <Select isActive={isOpen} onClick={() => setOpen(!isOpen)}>
        <Flag>{flag}</Flag>
        <Lang>{langToISO(lang).toUpperCase()}</Lang>
        <Caret />
      </Select>
      <Options shown={isOpen}>
        {locales.map((l) => {
          const active = lang === l
          return (
            <Option key={l} active={active}>
              <Link href={currentPath} locale={l} passHref shallow={false}>
                <StyledLink>
                  {active && <Selected />}
                  {t(`common:${l}-long`) || l}
                </StyledLink>
              </Link>
            </Option>
          )
        })}
      </Options>
    </Wrapper>
  )
}
