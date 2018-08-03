import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../utilities'
import Github from '../assets/Github.svg'
import Google from '../assets/Google.svg'
import Linkedin from '../assets/LinkedIN.svg'
import Twitter from '../assets/Twitter.svg'

const Footer = ({ siteTitle }) => (
  <FooterWrap>
    <IconsWrapper>
      <a href="https://twitter.com/tomasvorel13" target="_blank">
        <SocialIcon src={Twitter} />
      </a>
      <a href="https://github.com/tomvorel13" target="_blank">
        <SocialIcon src={Github} />
      </a>
      <a href="mailto:tomvorel13@gmail.com">
        <SocialIcon src={Google} />
      </a>
      <a href="https://www.linkedin.com/in/tomvorel" target="_blank">
        <SocialIconLast src={Linkedin} />
      </a>
    </IconsWrapper>
  </FooterWrap>
)

export default Footer

// STYLES

const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: auto 40% auto;
  background-color: ${colors.yellow};
`

const IconsWrapper = styled.div`
  display: flex;
  grid-column: 2 / span 1;
  justify-content: center;
`

const SocialIcon = styled.img`
  color: ${colors.black};
  width: 30px;
  margin-right: 20px;
`

const SocialIconLast = styled.img`
  color: ${colors.black};
  width: 30px;
  margin-right: 0;
`
