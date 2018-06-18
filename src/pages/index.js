import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'

const IndexPage = () => (
  <Wrapper>
    <Heading>Hi, I'm Tom.</Heading>
    <IntroSentence>
      I am a Frontend Developer from Brno, Czech Repulic.
    </IntroSentence>
  </Wrapper>
)

export default IndexPage

// STYLES

const Wrapper = styled.div`
  margin: 15% 0 0 5%;
`

const Heading = styled.h1`
  color: ${colors.green};
  font-size: 5rem;
  font-weight: 700;
`

const IntroSentence = styled.p`
  color: ${colors.white};
  font-size: 2rem;
  line-height: 1.2;
`
