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
  box-shadow: 1px 0px 17px -2px rgba(0, 0, 0, 0.75);
`

const Heading = styled.h1`
  font-size: 2em;
  padding: 0 0.5em;
  margin-top: 1em;

  & > a {
    color: #00ffa1;
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
    padding: 10px;
    text-transform: uppercase;
    border-top: 1px solid #00171f;

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }

  & > a:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #00ffa1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  & > a:first-of-type {
    border: none;
  }

  & > a:hover,
  & > a:focus,
  & > a:active {
    color: black;
  }
  & > a:hover:before,
  & > a:focus:before,
  & > a:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
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
  font-size: 30px;
  display: inline-block;
  color: #00ffa1;
  margin: 0 10px 0.5em 10px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
  }
`
