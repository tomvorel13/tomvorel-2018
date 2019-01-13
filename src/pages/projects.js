import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../utilities'
import {
  MainWrapper,
  ContentColumn,
  SectionHeading,
  Text,
} from '../styles/pages'

const Projects = () => (
  <Layout>
    <MainWrapper>
      <ContentColumn>
        <ProjectsHeading>Projects</ProjectsHeading>
        <SecondaryHeading
          href="https://react-weather-app-19a1a.firebaseapp.com/"
          target="_blank"
        >
          WEATHER APP
        </SecondaryHeading>
        <TextWithMb>
          A simple web app for finding out weather conditions in a city of your
          choice. <br />
          <br /> Built with React (version 16+), Styled Components for styling.
        </TextWithMb>
        <SecondaryHeading
          href="https://vue-weather-app-5b4b2.firebaseapp.com/"
          target="_blank"
        >
          WEATHER APP - VUE
        </SecondaryHeading>
        <TextWithMb>
          This is essentially the same app, but this one is built with Vue.js.
        </TextWithMb>
        <SecondaryHeading href="https://tom-vorel.com" target="_blank">
          TOM-VOREL.COM
        </SecondaryHeading>
        <TextWithMb>
          My personal website built with Gatsby.js (static site generator built
          on React) and using Styled Components for my CSS.
        </TextWithMb>
      </ContentColumn>
    </MainWrapper>
  </Layout>
)

export default Projects

// STYLES
const ProjectsHeading = SectionHeading.extend`
  max-width: 15rem;
`

const SecondaryHeading = styled.a`
  color: ${colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-decoration: none;
`

const TextWithMb = Text.extend`
  margin-bottom: 6rem;
`
