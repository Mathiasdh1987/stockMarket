import styled from 'styled-components'
import { colors, media } from '../../utils/globalStyle'
import SvgLogoSmall from '../../public/icons/SvgLogoSmall'

export const Wrapper = styled.nav<{ scrolled?: boolean }>`
  z-index: 8;
  transition: height ease 0.3s, border-bottom ease 0.3s;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.scrolled ? 64 : 84)}px;
  box-shadow: ${(props) =>
    props.scrolled && 'box-shadow: 0px 8px 8px rgba(0, 0, 0, .1)'};
  border-bottom: 1px solid
    ${(props) => (props.scrolled ? colors.primaryLight : 'transparent')};
  background: ${colors.primaryDark};
  a {
    color: #fff;
    text-decoration: none;
  }
`
export const Logo = styled.a`
  display: flex;
  margin-left: 5%;
  z-index: 4;
  position: relative;
  align-items: center;
  font-size: 1.5vw;
  font-weight: 700;
`
export const Overlay = styled.div<{ toggled?: boolean }>`
  z-index: ${(props) => (props.toggled ? 5 : -1)};
  transition: all ease-out 0.2s;
  opacity: ${(props) => (props.toggled ? 1 : 0)};
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => (props.toggled ? 100 : 0)}vh;
  box-sizing: border-box;
  padding: 20vh 32px;
  background: ${colors.blue};
  ${media.xs} {
    display: flex;
    pointer-events: ${(props) => (props.toggled ? 'unset' : 'none')};
  }
`
export const OverlayLinks = styled.ul``

export const OverlayDownloads = styled.div``

export const LogoWithBrand = styled(SvgLogoSmall)``

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;
`

export const LinkList = styled.ul`
  display: flex;
  ${media.xs} {
    display: none;
  }
`

export const LinkItem = styled.li`
  display: block;
  &:not(:last-child) {
    margin-right: 40px;
    ${media.sm} {
      margin-right: 32px;
    }
    ${media.xs} {
      margin: 0 0 16px 0;
    }
  }
`

export const StyledLink = styled.a<{ active?: boolean }>`
  transition: color ease 0.1s;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  color: ${(props) => (props.active ? colors.grey : colors.black)};
  ${media.xs} {
    font-size: 32px;
    line-height: 44px;
    color: ${colors.white};
    ${(props) =>
      props.active &&
      `
      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${colors.white};
      }
    `}
  }
  &:hover {
    color: ${colors.blue};
    ${media.xs} {
      color: ${colors.white};
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  ${media.sm} {
    margin-left: 32px;
  }
  ${media.xs} {
    margin-left: 20px;
  }
`
