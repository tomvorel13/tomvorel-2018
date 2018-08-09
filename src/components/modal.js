import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../utilities'
import Cross from '../assets/cross.svg'

const Modal = ({ siteTitle, ...props }) => (
  <ModalWrapper>
    <CrossIcon src={Cross} onClick={props.clicked} />
    <MenuLink onClick={props.clicked} to="/">
      HOME
    </MenuLink>
    <MenuLink onClick={props.clicked} to="/about">
      ABOUT
    </MenuLink>
    <MenuLink onClick={props.clicked} to="/projects">
      PROJECTS
    </MenuLink>
    <MenuLink onClick={props.clicked} to="/contact">
      CONTACT
    </MenuLink>
  </ModalWrapper>
)

export default Modal

// STYLES

const CrossIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 110%;
  padding-top: 15rem;
  position: absolute;
  width: 100%;
`

const MenuLink = styled(Link)`
  color: ${colors.black};
  background-color: ${colors.yellow};
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 3rem;
  padding: 2rem 0;
  margin-bottom: .3rem;
  text-align: center;
  text-decoration: none;
  max-width: 100%;
`
