import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"

import favicon from "../assets/favicon.png"
import "./index.css"
import { colors } from "../utilities"

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Helmet
      meta={[
        {
          name: "description",
          content: "A new version of my personal website for 2018",
        },
        {
          name: "keywords",
          content:
            "tom vorel, web developer, portfolio, 2018, personal website",
        },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <FlexWrap>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </FlexWrap>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.func.isRequired,
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
const FlexWrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const LayoutWrapper = styled.div`
  font-size: 62.5%;
`

const MainContent = styled.div`
  flex: 1;
  background-color: ${colors.yellow};
  font-family: "Lato", sans-serif;
`
