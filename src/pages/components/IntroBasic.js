import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Plx from "react-plx"
import { FaLink } from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill"
import icon from "../../images/Icon-Black.png"



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
    // const text = 'Stop digging through cluttered inboxes and threads.\nLinkLater makes it easy to save links and create collections with friends.'
    // const text = 'Stop digging through cluttered inboxes and threads.\nLinkLater makes it easy to save links and\ncreate collections with friends.'
    const text = 'LinkLater makes it easy to save links and\ncreate collections with friends.'

    return (
  <section id="intro">
  <Plx parallaxData={parallaxData}>

  <div className="intro-container">
  <Seo title="Save links for later" />

  <Plx parallaxData={parallaxText}>
  <div>
      <div className="top-container">
      <h3>LinkLater</h3>
      <h2 className="top-logo"><img src={icon} />
      </h2>
      </div>
  </div>
  <div className="intro-container-text">

    <div className="title">
      <h1>A better way<br/>to share links<br/>with friends.</h1>
      {/*<FaLink className="link-icon"/>*/}
    </div>


    {/*<div className="title-tagline">

      <h3>Stop digging through cluttered inboxes and threads.</h3>
      <h3>LinkLater helps you save, organize and share links with friends.</h3>
    </div>*/}

    <div>
      <button onClick={this.handleClickScroll} className="request-button">
        <b>Request an invite</b>
      </button>
    </div>

  </div>




  </Plx>

  </div>
  </Plx>
  </section>
)
}
}

export default Intro
