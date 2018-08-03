import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'
import { MainWrapper, ContentColumn, SectionHeading, Text } from '../styles/pages'

const Contact = () => (
  <MainWrapper>
    <ContentColumn>
      <ContactHeading>Contact</ContactHeading>
      <ContactText>
        Feel free to get in touch with me via email tomvorel13@gmail.com or
        reach out via Twitter.
      </ContactText>
    </ContentColumn>
  </MainWrapper>
)

export default Contact

// STYLES

const ContactHeading = SectionHeading.extend`
  max-width: 150px;
`

const ContactText = Text.extend`
  text-align: center;
`
