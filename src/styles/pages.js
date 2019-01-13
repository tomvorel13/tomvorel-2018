import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from '../utilities'

export const Animation = keyframes`
  0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;

  /* PAGE TRANSITION ANIMATION */
  -webkit-animation: ${Animation} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  animation: ${Animation} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

  @media screen and (max-width: 76.8rem) {
    grid-template-columns: auto 80% auto;
  }

  @media screen and (max-width: 37.5rem) {
    grid-template-columns: auto 90% auto;
  }
`

export const ContentColumn = styled.div`
  grid-column: 2 / span 1;
`

export const SectionHeading = styled.h2`
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

export const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 10rem;

  @media screen and (max-width: 76.8rem) {
    font-size: 2.5rem;
  }

  @media (max-width: 37.5rem) {
    font-size: 1.5rem;
  }
`
