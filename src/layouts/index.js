import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import styled from 'styled-components'
import photo from './photo.jpeg'

const Layout = ({ children, data }) => (
  <MainWrapper>
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
    <div>{children()}</div>
    <BackgroundImage src={photo} alt="" />
  </MainWrapper>
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

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100%;
`

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
`
