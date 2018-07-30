import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../utilities'
import Logo1 from '../assets/Logo1.svg'

const Header = ({ siteTitle }) => (
  <Navbar>
    <Link to="/">
      <Logo src={Logo1} alt="" />
    </Link>
    <MenuItems>
      <Link to="/about">
        <MenuItem>about me</MenuItem>
      </Link>
      <Link to="/projects">
        <MenuItem>projects</MenuItem>
      </Link>
      <Link to="/contact">
        <MenuItem>contact</MenuItem>
      </Link>
    </MenuItems>
  </Navbar>
)

export default Header

// STYLES
const Logo = styled.img`
  margin-bottom: 0;
`

const Navbar = styled.div`
  align-items: center;
  background-color: ${colors.yellow};
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 0 70px;
`

const MenuItems = styled.div`
  display: flex;
`

const MenuItem = styled.span`
  border-bottom: 3px solid transparent;
  display: inline-block;
  color: ${colors.black};
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  margin-left: 40px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 3px solid ${colors.black};
    font-weight: 700;
    transform: scale(1.1);
  }

  &:active {
    border-bottom: 3px solid ${colors.black};
  }
`
