import styled from 'styled-components'
import { colors } from '../utilities'

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;

  @media screen and (max-width: 76.8rem) {
    grid-template-columns: auto 80% auto;
  }

  @media screen and (max-width: 37.5rem) {
    grid-template-columns: auto 90% auto;
  }
`

const ContentColumn = styled.div`
  grid-column: 2 / span 1;
`

const SectionHeading = styled.h2`
  background-color: ${colors.black};
  color: ${colors.yellow};
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 2.8rem;
  padding: 0.5rem 1rem;
  margin: 0 auto 6rem auto;
  max-width: 12rem;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 76.8rem) {
    font-size: 3.5rem;
    padding: 1.5rem 2rem;
  }

  @media (max-width: 37.5rem) {
    font-size: 2.5rem;
    margin: 3rem auto 6rem auto;
    padding: 0.5rem 1rem;
  }
`

const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  font-weight: 600;
  margin-bottom: 10rem;

  @media screen and (max-width: 76.8rem) {
    font-size: 2.5rem;
  }

  @media (max-width: 37.5rem) {
    font-size: 1.5rem;
  }
`

export default {
  MainWrapper,
  ContentColumn,
  SectionHeading,
  Text,
}
