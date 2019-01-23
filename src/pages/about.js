import React from "react"
import Layout from "../components/layout"

import {
  MainWrapper,
  ContentColumn,
  SectionHeading,
  Text,
} from "../styles/pages"

const About = () => (
  <Layout>
    <MainWrapper>
      <ContentColumn>
        <SectionHeading>About</SectionHeading>
        <Text>
          Hi, I’m Tom Vorel. <br />
          <br /> I’m a passionate, self-taught Frontend Web Developer that
          currently works full time for Madfinger Games.
          <br />
          <br /> In my day-to-day work at MFG, I mostly code in React in
          combination with Redux and other standard frontend technologies such
          are HTML and CSS. I’m also interested in learning Node.js, which is
          one of my goals for 2019.
          <br />
          <br /> When it comes to my free time; I’m spending most of it working
          on my Javascript skills, developing single page applications using
          React, and I also have experience with Angular 2+ and Vue.js. <br />{" "}
          <br />
          When I’m not coding; I love reading about web development on Twitter
          and Medium, listening to about 20 different podcasts and when I want
          to take a break from programming altogether, I love watching sports
          (Arsenal FC and Detroit Pistons are my 2 favorite professional teams)
          or working out in the gym. <br />
          <br /> I’m also very interested in self-development and I love coffee!
        </Text>
      </ContentColumn>
    </MainWrapper>
  </Layout>
)

export default About
