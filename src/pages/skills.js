import React from 'react'
import styled from 'styled-components'

import { Wrapper, Heading, Text } from '../styles/pages'

import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import JsIcon from '../assets/js.svg'
import ReactIcon from '../assets/react.svg'
import VueIcon from '../assets/vue.svg'
import AngularIcon from '../assets/angular.svg'
import GitIcon from '../assets/git.svg'
import NpmIcon from '../assets/npm.svg'

const Skills = () => (
  <GridWrapper>
    <GridHeading>What can I do?</GridHeading>
    <Icon src={HtmlIcon} width="100px" />
    <Icon src={CssIcon} width="100px" />
    <Icon src={JsIcon} width="100px" />
    <Icon src={ReactIcon} width="100px" />
    <Icon src={VueIcon} width="100px" />
    <Icon src={AngularIcon} width="100px" />
    <Icon src={GitIcon} width="100px" />
    <Icon src={NpmIcon} width="100px" />
  </GridWrapper>
)

export default Skills

const GridWrapper = Wrapper.extend`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const GridHeading = Heading.extend`
  grid-column: 1 / span 3;
`

const Icon = styled.img`
  width: ${props => props.width};
`
