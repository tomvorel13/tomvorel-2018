import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../utilities'
import Cross from '../assets/cross.svg'

const Modal = ({ siteTitle }) => (
    <ModalWrapper>
        <p>Hi there!</p>
        <CrossIcon src={Cross} />
    </ModalWrapper>
)

export default Modal;

// STYLES

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.95);
    position: absolute;
`

const CrossIcon = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`