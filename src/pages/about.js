import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'
import { MainWrapper, ContentColumn, SectionHeading, Text } from '../styles/pages'

const About = () => (
  <MainWrapper>
    <ContentColumn>
      <SectionHeading>About</SectionHeading>
      <Text>
        Hi, I’m Tom Vorel. <br />
        <br /> I’m a passionate self-taught Frontend Web Developer currently
        working full time for Monster Worldwide, where I’m mostly responsible
        for creating custom, awesome looking and responsive job ads for our
        premium customers such are Huawei, Spotify, FedEx and many others.{' '}
        <br />
        <br /> In my job I mostly work with HTML and CSS (including the newest
        features such as flexbox, CSS Animations and hopefully we can start
        implementing CSS Grid in the near future). When it comes to my free time I’m
        spending most of it working on my Javascript skills and developing
        single page applications using mostly React, although I also have
        experience with Angular 2+ and Vue.js. <br />
        <br /> When I’m not coding I love reading about web development on
        Twitter and Medium and listening to about 20 different podcasts. When I
        want to take a break from programming altogether, I love watching sports
        (Arsenal FC and Detroit Pistons are my 2 favorite professional teams) or
        working out in the gym. <br />
        <br /> I’m also very interested in self-development and I love coffee!
      </Text>
    </ContentColumn>
  </MainWrapper>
)

export default About

// STYLES


