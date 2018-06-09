import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexPage = () => (
  <Wrapper>
    <Heading>Hi, I'm Tom.</Heading>
    <p>I am a Frontend Developer from Brno, Czech Repulic.</p>
  </Wrapper>
)

export default IndexPage

// STYLES

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Heading = styled.h1`
  color: #00171f;
`

const IntroSentence = styled.p`
  color: #00171f;
`
