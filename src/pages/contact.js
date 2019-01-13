import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../utilities'
import {
  MainWrapper,
  ContentColumn,
  SectionHeading,
  Text,
} from '../styles/pages'

const Contact = () => (
  <Layout>
    <MainWrapper>
      <ContentColumn>
        <ContactHeading>Contact</ContactHeading>
        <ContactText>
          Feel free to get in touch with me via email{' '}
          <EmailLink href="mailto:tomvorel13@gmail.com">
            tomvorel13@gmail.com
          </EmailLink>{' '}
          or reach out via one of the below listed social platforms.
        </ContactText>
      </ContentColumn>
    </MainWrapper>
  </Layout>
)

export default Contact

// STYLES

const ContactHeading = SectionHeading.extend`
  max-width: 15rem;
`

const ContactText = Text.extend`
  text-align: center;
`
const EmailLink = styled.a`
  color: ${colors.black};
  text-decoration: none;
  font-weight: 600;
`
