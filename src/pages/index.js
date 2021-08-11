import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/styles.css"

import Intro from "./components/IntroBasic"
import Info from "./components/InfoBasic"
import RequestAccess from "./components/RequestAccess"
import Footer from "./components/Footer"



const IndexPage = () => (
  <div className="content-container">
  <Seo title="Save links for later" />

    <Intro />
    <Info />
    <div className="bottom-container">
      <RequestAccess />
      <Footer />
    </div>
  </div>
)

export default IndexPage
