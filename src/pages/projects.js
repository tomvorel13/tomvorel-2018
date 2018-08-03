import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'
import {
  MainWrapper,
  ContentColumn,
  SectionHeading,
  Text,
} from '../styles/pages'

const Projects = () => (
  <MainWrapper>
    <ContentColumn>
      <ProjectsHeading>Projects</ProjectsHeading>
      <SecondaryHeading>WEATHER APP</SecondaryHeading>
      <TextWithMb>
        A simple web app for finding out weather conditions in a city of your
        choice. <br />
        <br /> Built with React (version 16+), Styled Components for styling.
      </TextWithMb>
      <SecondaryHeading>WEATHER APP - VUE</SecondaryHeading>
      <TextWithMb>
        This is essentially the same up, but this one is built with Vue.js.
      </TextWithMb>
      <SecondaryHeading>TOMVOREL.COM</SecondaryHeading>
      <TextWithMb>
        My personal website built with Gatsby.js (static site generator built on
        React.js) and using Styled Components for my styles.
      </TextWithMb>
    </ContentColumn>
  </MainWrapper>
)

export default Projects

// STYLES

const ProjectsHeading = SectionHeading.extend`
  max-width: 150px;
`

const SecondaryHeading = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`

const TextWithMb = Text.extend`
  margin-bottom: 60px;
`
