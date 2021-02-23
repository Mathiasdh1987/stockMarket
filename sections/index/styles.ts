import styled from 'styled-components'
import { Container, Col } from 'styled-bootstrap-grid'
import { colors, media } from '../../utils/globalStyle'

export const Wrapper = styled(Container)`
  background: ${colors.primaryLight};
  border-radius: 12px;
  height: 1000px;
  margin-top: 100px;
  text-align: center;
`

export const Tools = styled(Col)`
  border-radius: 12px 0 0 12px;
  margin: 10px;
  // position: fixed;
  max-width: 64px !important;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  background: ${colors.primary};
`
