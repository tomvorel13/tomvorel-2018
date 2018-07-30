import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'

const IndexPage = () => (
  <HomeWrapper>
    <ContentColumn>
      CREATE
    </ContentColumn>
  </HomeWrapper>
)

export default IndexPage

// STYLES

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 50% auto;
`

const ContentColumn = styled.div`
 grid-column: 2 / span 1; 
`
