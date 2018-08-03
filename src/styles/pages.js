import styled from 'styled-components'
import { colors } from '../utilities'

const MainWrapper = styled.div`
  display: grid;
  height: 80vh;
  grid-template-columns: 2fr 3fr 2fr;
`

const ContentColumn = styled.div`
  grid-column: 2 / span 1;
`

const SectionHeading = styled.h2`
  background-color: ${colors.black};
  color: ${colors.yellow};
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  padding: 5px 10px;
  margin: 0 auto 60px auto;
  max-width: 120px;
  text-align: center;
  text-transform: uppercase;
`

const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-weight: 600;
`

export default {
  MainWrapper,
  ContentColumn,
  SectionHeading,
  Text
}
