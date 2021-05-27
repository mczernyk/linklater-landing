import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Plx from "react-plx"
import { FaLink } from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill"


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

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickScroll = this.handleClickScroll.bind(this)
  }

  componentDidMount() {
    smoothscroll.polyfill()
  }
  handleClickScroll(e) {
    e.preventDefault()
    let scroll = true
    // const { type, element, offset, timeout } = this.props

    let elem = document.getElementById("request")
          scroll = elem ? true : false

    scroll
      ? this.scrollTo(elem, 0, null)
      : console.log(`Element not found: ${element}`) // eslint-disable-line
  }
  scrollTo(element, offSet = 0, timeout = null) {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" })
      }, timeout)
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" })
    }
  }

  render() {
    return (
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
  <button onClick={this.handleClickScroll} className="request-button">
    <b>Request early access</b>
  </button>
  </Plx>

  </div>
  </Plx>

)
}
}

export default Intro
