import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Modal from '../components/modal'

import { colors } from '../utilities'
import Logo1 from '../assets/Logo1.svg'
import Burger from '../assets/burger.svg'

class Header extends Component {
  state = {
    showMenu: false,
  }

  toggleModal = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    return (
      <div>
        {this.state.showMenu ? <Modal clicked={this.toggleModal} /> : null}
        <Navbar>
          <Link to="/">
            <Logo src={Logo1} alt="" />
          </Link>
          <BurgerIcon onClick={this.toggleModal} src={Burger} alt="" />
          <MenuItems>
            <MenuItem to="/about">about me</MenuItem>
            <MenuItem to="/projects">projects</MenuItem>
            <MenuItem to="/contact">contact</MenuItem>
          </MenuItems>
        </Navbar>
      </div>
    )
  }
}

export default Header

// STYLES

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover,
  &:focus,
  &:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (max-width: 136.6rem) {
    width: 80%;
  }
`

const BurgerIcon = styled.img`
  margin-bottom: 0;

  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`

const Navbar = styled.div`
  align-items: center;
  background-color: ${colors.yellow};
  display: flex;
  height: 10rem;
  justify-content: space-between;
  padding: 0 7rem;

  @media screen and (max-width: 37.5rem) {
    padding: 0 1rem;
  }
`

const MenuItems = styled.div`
  display: flex;

  @media screen and (max-width: 37.5rem) {
    display: none;
  }
`

const MenuItem = styled(Link)`
  border-bottom: 0.3rem solid transparent;
  display: inline-block;
  color: ${colors.black};
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin-left: 4rem;
  padding-bottom: 0.3rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 0.2rem solid ${colors.black};
    font-weight: 700;
    transform: scale(1.1);
  }

  &:active {
    border-bottom: 0.3rem solid ${colors.black};
  }

  @media screen and (max-width: 136.6rem) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 76.8rem) {
    font-size: 2rem;
  }
`
