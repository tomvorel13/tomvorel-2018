import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
        <span>One</span>
        <span>One</span>
        <span>One</span>
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
  padding: 0.4em;
  color: red;

  & > a {
    color: white;
    text-decoration: none;
  }
`
const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  & > a {
    color: white;
    text-decoration: none;
    padding: 5px;
    text-transform: uppercase;
    background-color: black;
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