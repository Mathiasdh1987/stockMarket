import styled from 'styled-components'
import { colors, fonts, media } from '../../utils/globalStyle'
import { rgba } from '../../utils/styleHelpers'
import SvgCheckCircleIcon from '../../public/icons/SvgCheckCircleIcon'
import SvgCaretDownIcon from '../../public/icons/SvgCaretDownIcon'

export const Wrapper = styled.div`
  position: relative;
`

export const Select = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  z-index: 2;
  transition: border-color ease 0.05s;
  outline: none;
  position: relative;
  font-family: ${fonts.text};
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  color: ${colors.black};
  height: 42px;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  border: 1.5px solid ${colors.grey};
  border-radius: 8px;
  background: ${colors.white};
  &:hover {
    border-color: ${rgba(colors.blue, 0.4)};
  }
`

export const Flag = styled.span`
  display: block;
  font-size: 16px;
  margin-right: 8px;
`

export const Lang = styled.span`
  display: block;
  margin-right: 12px;
  ${media.xs} {
    display: none;
  }
`

export const Caret = styled(SvgCaretDownIcon)`
  color: ${rgba(colors.grey, 0.5)};
`

export const Options = styled.ul<{ shown?: boolean }>`
  z-index: 1;
  position: absolute;
  display: ${(props) => !props.shown && 'none'};
  top: calc(100% + 2px);
  min-width: 100%;
  width: max(100%, 164px);
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 2px 100px ${rgba(colors.black, 0.16)};
  border: 1px solid ${rgba(colors.grey, 0.5)};
  border-radius: 8px;
  background: ${colors.primary};
  ${media.xs} {
    right: 0;
  }
`

export const Option = styled.li<{ active?: boolean }>`
  cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  width: 100%;
  height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  background: ${(props) => props.active && `${colors.primary}!important`};
  &:not(:last-child) {
    border-bottom: 1px solid ${rgba(colors.blue, 0.5)};
  }
  &:hover {
    color: ${colors.grey};
    background: ${rgba(colors.blue, 0.5)};
  }
`

export const StyledLink = styled.a`
  cursor: inherit;
  font-family: ${fonts.text};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: currentColor;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Selected = styled(SvgCheckCircleIcon)`
  width: 18px;
  height: 18px;
  color: ${colors.blue};
  margin-right: 8px;
`
