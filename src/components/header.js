import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as FontAwesome from 'react-icons/lib/fa'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Heading>
      <Link to="/">TOMVOREL.COM</Link>
    </Heading>
    <Menu>
      <Link to="/about">about me</Link>
      <Link to="/skills">skills</Link>
      <Link to="/projects">projects</Link>
      <Link to="/contact">contact</Link>
    </Menu>
    <SocialIcons>
      <IconsWrapper>
        <Icon href="https://github.com/tomvorel13" target="_blank">
          <FontAwesome.FaGithub />
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/tomas-vorel-3bb622a2"
          target="_blank"
        >
          <FontAwesome.FaLinkedin />
        </Icon>

        <Icon href="https://twitter.com/tomasvorel13" target="_blank">
          <FontAwesome.FaTwitter />
        </Icon>
      </IconsWrapper>
    </SocialIcons>
  </HeaderWrapper>
)

export default Header

// STYLES

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
`

const Heading = styled.h1`
  font-size: 2em;
  padding: 0 0.5em;
  margin-top: 1em;

  & > a {
    color: white;
    text-decoration: none;
  }
`
const Menu = styled.div`
  width: 100%;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  text-align: left;

  & > a {
    color: white;
    text-decoration: none;
    padding: 5px;
    text-transform: uppercase;
    border-top: 1px solid #00171f;
  }

  & > a:first-of-type {
    border: none;
  }
`

const SocialIcons = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: flex-end;
`
const IconsWrapper = styled.div`
  width: 100%;
`

const Icon = styled.a`
  font-size: 25px;
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 10px 0.5em 10px;
`
