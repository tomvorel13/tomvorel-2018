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
  font-size: 120px;
  font-weight: 700;
  margin: auto;
  max-width: 70%;
  padding: 10% 8%;
  text-align: center;
`

const IntroSentence = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 60px 0 100px 0;
  text-align: center;
`

const Button = styled.button`
  align-items: center;
  color: ${colors.black};
  background-color: ${colors.yellow};
  border: 5px solid ${colors.black};
  display: flex;
  font-size: 28px;
  font-weight: 600;
  justify-content: space-between;
  margin: 0 auto 150px auto;
  padding: 2%;
  text-decoration: none;
  text-transform: uppercase;
  width: 250px;

  &:hover {
    cursor: pointer;
  }
`

const Caret = styled.img`
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
