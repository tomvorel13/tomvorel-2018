import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../utilities'
import { Wrapper, Heading, Text } from '../styles/pages'

const About = () => (
  <Wrapper>
    <Heading>Who am I?</Heading>
    <Text>
      My name is Tom, I'm 25 years old and I live in Brno, Czech Republic. I am
      a passionate self-taught frontend developer with a tremendous love for
      creating beautiful things with code.
      <br />
      <br /> My primary focus is JavaScript (working with mainly with React and
      Vue.js in my free time) but as of right now, I work as full time as a Web
      Designer/Frontend Coder at Monster Worldwide here in Brno.
      <br />
      <br /> Apart from coding I love sports, music and educating myself about
      web development and life in general.
    </Text>
  </Wrapper>
)

export default About
