import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const About = () => (
  <Wrapper>
    <Heading>ABOUT</Heading>
    <Text>
      My name is Tom, I'm 25 years old and I live in Brno,Czech Republic. I am a
      passionate self-taught frontend developer with a tremendous love for
      creating beautiful things with code. My primary focus is Javascript
      (working with React and Vue.js).
    </Text>
  </Wrapper>
)

export default About

const Wrapper = styled.div`
  max-width: 35rem;
  margin: 5em auto 0 auto;
`

const Heading = styled.h1`
  color: #00ffa1;
  text-align: center;
  font-size: 5rem;
  font-weight: 400;
`

const Text = styled.p`
  color: #fff;
  text-align: justify;
  font-size: 1.5rem;
  line-height: 1.2;
`
