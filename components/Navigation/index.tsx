import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
  Wrapper,
  Logo,
  LogoWithBrand,
  RightContent,
  LinkList,
  LinkItem,
  StyledLink,
} from './styles'

interface ILink {
  name: string
  href: string
}
type TLinks = Array<ILink>

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  // const [overlayToggled, setOverlay] = useState(false)
  const handleScroll = () => setScrolled(window.scrollY > 0)

  const router = useRouter()
  const { t, lang } = useTranslation()
  const links: TLinks = t('navigation:links', {}, { returnObjects: true })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Wrapper scrolled={scrolled}>
      <Link href="/" passHref>
        <Logo>
          <LogoWithBrand />
          StockMarket
        </Logo>
      </Link>
      <RightContent>
        <LinkList>
          {links.map(({ name, href }) => {
            const isActive = router.pathname === `/${lang}${href}`
            return (
              <LinkItem key={href}>
                <Link href={href} passHref>
                  <StyledLink active={isActive}>{name}</StyledLink>
                </Link>
              </LinkItem>
            )
          })}
        </LinkList>
        {/* <Actions>
          <LanguageSwitcher />
        </Actions> */}
      </RightContent>
    </Wrapper>
  )
}
