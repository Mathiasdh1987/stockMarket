import styled from 'styled-components'

import { media } from '../utils/globalStyle'

const Container = styled.div`
  width: 85vw;
  max-width: 1200px;
  margin: 0 auto;
  ${media.xs} {
    width: 92vw;
  }
`

export default Container
