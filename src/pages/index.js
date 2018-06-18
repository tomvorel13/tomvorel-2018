import React from 'react'
import styled from 'styled-components'

const IndexPage = () => (
  <Wrapper>
    <Heading>Hi, I'm Tom.</Heading>
    <IntroSentence>I am a Frontend Developer from Brno, Czech Repulic.</IntroSentence>
  </Wrapper>
)

export default IndexPage

// STYLES

const Wrapper = styled.div`
  margin: 15% 0 0 5%;
`

const Heading = styled.h1`
  color: #00ffa1;
  font-size: 5rem;
  font-weight: 700;
`

const IntroSentence = styled.p`
  color: #fff;
  font-size: 2rem;
  line-height: 1.2;
`
