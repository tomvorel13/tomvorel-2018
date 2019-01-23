import React from "react"
import styled from "@emotion/styled"

import { colors } from "../utilities"
import Github from "../assets/Github.svg"
import Linkedin from "../assets/LinkedIN.svg"
import Twitter from "../assets/Twitter.svg"
import Mail from "../assets/mail.svg"

const Footer = () => (
  <FooterWrap>
    <IconsWrapper>
      <a
        href="https://twitter.com/tomasvorel13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={Twitter} />
      </a>
      <a
        href="https://github.com/tomvorel13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={Github} />
      </a>
      <a href="mailto:tomvorel13@gmail.com">
        <SocialIcon src={Mail} />
      </a>
      <a
        href="https://www.linkedin.com/in/tomvorel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIconLast src={Linkedin} />
      </a>
    </IconsWrapper>
  </FooterWrap>
)

export default Footer

// STYLES
const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  background-color: ${colors.yellow};
`

const IconsWrapper = styled.div`
  display: flex;
  grid-column: 2 / span 1;
  justify-content: center;
  padding: 2rem 0;
  align-items: center;
`

const SocialIcon = styled.img`
  color: ${colors.black};
  width: 2.5rem;
  margin-right: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const SocialIconLast = styled(SocialIcon)`
  margin-right: 0;
`
