import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Plx from "react-plx"
import { FaLink } from "react-icons/fa";

const parallaxData = [
  {
    start: "self",
    duration: "200vh",
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
]

const parallaxText = [
  {
    start: "self",
    duration: "200vh",
    properties: [
      {
        startValue: 0,
        endValue: 20,
        unit: "vh",
        property: "translateY",
      }
    ],
  },
]


const Intro = () => (
  <Plx parallaxData={parallaxData}>

  <div className="intro-container">
  <Seo title="Home" />

  <Plx parallaxData={parallaxText} className="intro-container-text">


  <div className="title">
    <h1>LinkLater</h1>
    <FaLink className="link-icon"/>
  </div>

  <h2>All your links in one place.</h2>
  <p><b>LinkLater</b> helps you save, organize and share links with friends.</p>
  <button onClick={console.log('test')} className="request-button">
    <b>Request early access</b>
  </button>
  </Plx>

  </div>
  </Plx>

)

export default Intro
