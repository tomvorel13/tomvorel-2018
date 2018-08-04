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
      <MenuItem to="/about">about me</MenuItem>
      <MenuItem to="/projects">projects</MenuItem>
      <MenuItem to="/contact">contact</MenuItem>
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
  height: 10rem;
  justify-content: space-between;
  padding: 0 7rem;
`

const MenuItems = styled.div`
  display: flex;
`

const MenuItem = styled(Link)`
  border-bottom: 0.3rem solid transparent;
  display: inline-block;
  color: ${colors.black};
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin-left: 4rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 0.3rem solid ${colors.black};
    font-weight: 700;
    transform: scale(1.1);
  }

  &:active {
    border-bottom: 0.3rem solid ${colors.black};
  }
`
