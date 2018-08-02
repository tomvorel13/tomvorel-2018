import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'
import DoubleArrow from '../assets/double_arrow.svg'

const IndexPage = () => (
  <HomeWrapper>
    <ContentColumn>
      <HeroText>CREATE</HeroText>
      <IntroSentence>
        Hi, my name is Tom and I am a Frontend <br /> Developer from Brno, Czech
        Republic.
      </IntroSentence>
      <Button>
        About Me <Caret src={DoubleArrow} />
      </Button>
    </ContentColumn>
  </HomeWrapper>
)

export default IndexPage

// STYLES

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 40% auto;
`

const ContentColumn = styled.div`
  grid-column: 2 / span 1;
`

const HeroText = styled.span`
  align-self: center;
  background-color: ${colors.black};
  color: ${colors.yellow};
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 150px;
  font-weight: 700;
  margin: auto;
  max-width: 70%;
  padding: 8% 5%;
  text-align: center;
`

const IntroSentence = styled.p`
  font-size: 28px;
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
  font-size: 34px;
  font-weight: 600;
  justify-content: space-between;
  margin: 0 auto 200px auto;
  padding: 2%;
  text-transform: uppercase;
  width: 300px;
`

const Caret = styled.img`
  margin-bottom: 0;
`
