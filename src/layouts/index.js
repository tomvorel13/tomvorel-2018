import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import styled from 'styled-components'
import { colors } from '../utilities'


const Layout = ({ children, data }) => (
  <LayoutFontsize>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'A new version of my personal website for 2018',
        },
        {
          name: 'keywords',
          content:
            'tom vorel, web developer, portfolio, 2018, personal website',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <MainContent>{children()}</MainContent>
    <Footer />
  </LayoutFontsize>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// STYLES

const LayoutFontsize = styled.div`
  font-size: 62.5%;
`

const MainContent = styled.div`
  background-color: ${colors.yellow};
  font-family: 'Lato', sans-serif;
  height: 100vh;
`
