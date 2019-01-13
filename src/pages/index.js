import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'

import { colors } from '../utilities'
import { MainWrapper, ContentColumn } from '../styles/pages'
import DoubleArrow from '../assets/double_arrow.svg'

const IndexPage = () => (
  <Layout>
    <MainWrapper>
      <ContentColumn>
        <HeroText>CREATE</HeroText>
        <IntroSentence>
          Hi, my name is Tom and I am a Frontend <br /> Developer from Brno,
          Czech Republic.
        </IntroSentence>
        <StyledLink to="/about">
          <Button>
            About Me <Caret src={DoubleArrow} />
          </Button>
        </StyledLink>
      </ContentColumn>
    </MainWrapper>
  </Layout>
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

const Caret = styled.img`
  margin-bottom: 0;
  width: 12%;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
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
  margin: 0 auto 12rem auto;
  padding: 2%;
  text-decoration: none;
  text-transform: uppercase;
  width: 20rem;

  /* Animation */
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;

  &:hover {
    cursor: pointer;
  }

  &:hover ${Caret}, &:focus ${Caret}, &:active ${Caret} {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }

  @media screen and (max-width: 37.5rem) {
    padding: 4%;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
