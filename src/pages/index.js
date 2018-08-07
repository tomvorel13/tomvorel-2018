import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../utilities'
import { MainWrapper, ContentColumn } from '../styles/pages'
import DoubleArrow from '../assets/double_arrow.svg'

const IndexPage = () => (
  <MainWrapper>
    <ContentColumn>
      <HeroText>CREATE</HeroText>
      <IntroSentence>
        Hi, my name is Tom and I am a Frontend <br /> Developer from Brno, Czech
        Republic.
      </IntroSentence>
      <StyledLink to="/about">
        <Button>
          About Me <Caret src={DoubleArrow} />
        </Button>
      </StyledLink>
    </ContentColumn>
  </MainWrapper>
)

export default IndexPage

// STYLES

const HeroText = styled.span`
  align-self: center;
  background-color: ${colors.black};
  color: ${colors.yellow};
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 10rem;
  font-weight: 700;
  letter-spacing: 1rem;
  margin: 1rem auto 0 auto;
  max-width: 70%;
  padding: 2rem 1rem;
  text-align: center;

  @media screen and (max-width: 37.5rem) {
    font-size: 5rem;
    margin: 3rem auto 0 auto;
  }
`

const IntroSentence = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 6rem 0 10rem 0;
  text-align: center;

  @media screen and (max-width: 37.5rem) {
    margin: 6rem 0 8rem 0;
    font-size: 1.8rem;
  }
`

const Button = styled.button`
  align-items: center;
  color: ${colors.black};
  background-color: ${colors.yellow};
  border: 0.3rem solid ${colors.black};
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  justify-content: space-between;
  margin: 0 auto 13rem auto;
  padding: 2%;
  text-decoration: none;
  text-transform: uppercase;
  width: 20rem;

  &:hover {
    cursor: pointer;
  }
`

const Caret = styled.img`
  margin-bottom: 0;
  width: 12%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
