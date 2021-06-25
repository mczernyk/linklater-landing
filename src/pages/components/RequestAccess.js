import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Plx from "react-plx"
import { FaLink } from "react-icons/fa";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import smoothscroll from "smoothscroll-polyfill"
import icon from "../../images/Icon-White.png"




const parallaxData = [
  {
    start: "self",
    duration: "200vh",
    properties: [
      {
        startValue: 0,
        endValue: 0,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
]

const parallaxText = [
  {
    start: "self",
    duration: "90vh",
    // duration: 200vh
    properties: [
      {
        startValue: 0,
        endValue: 10,
        // endValue: 20
        unit: "vh",
        property: "translateY",
      }
    ],
  },
]


class RequestAccess extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickScroll = this.handleClickScroll.bind(this)
    this.state = {
      email: '',
      name: '',
      textInputChangeEmail: false,
      textInputChangeName: false,
      result: ''
    }
  }

  setEmail = async (email, name) => {
    this.setState({
      email: email,
      name: name,
    })
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = async (e) => {
    console.log('handle sub')
    e.preventDefault();
    const result = await addToMailchimp(
      this.state.email,
      {
        NAME: this.state.name
      }
    )

    console.log('result', this.state.result)

    await this.setState({
      result: result.result
    })
  }

  componentDidMount() {
    smoothscroll.polyfill()
  }

  handleClickScroll(e) {
    e.preventDefault()
    let scroll = true
    // const { type, element, offset, timeout } = this.props

    let elem = document.getElementById("intro")
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
    <section id="request">
    <Plx parallaxData={parallaxData}>

    <div className="request-container">
    <Seo title="LinkLater 🔗" />

    <Plx parallaxData={parallaxText}>
    <div className="request-container-text">
      {!this.state.result ? (
        <form onSubmit={this.handleSubmit}>
        <div className="request-container-input">

          <div className="center-text">
            <div className="link-icon-request"><img src={icon} onClick={this.handleClickScroll} cursor="pointer" /></div>


            {/*<FaLink className="link-icon-request" onClick={this.handleClickScroll}   cursor="pointer"
      />*/}

            <p>Sign up below to request<br></br>early access to <span className='white-text'>LinkLater</span> for iOS</p>

          </div>

          <div className="input-box">
            <input
              placeholder="Name"
              name="name"
              type="text"
              autoFocus="autofocus"
              onChange={text => this.handleChangeName(text)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Email address"
              name="email"
              type="text"
              autoFocus="autofocus"
              onChange={text => this.handleChangeEmail(text)}

            />
          </div>
          <button
            type="submit"
            label="submit"
            className="request-button-submit">
          <b>Request early access</b>
        </button>
        </div>
      </form>) : (
        <div className="request-container-input">
          <div className="center-text">

          <div className="link-icon-request"><img src={icon} onClick={this.handleClickScroll} cursor="pointer" /></div>

          <p>Sign up below to request<br></br>early access to <span className='white-text'>LinkLater</span> for iOS</p>

        </div>

        <div className="input-response">
          {this.state.result === 'success' ?
          <h2 className="success">Success!</h2> :
          <h2 className="failure">Something went wrong.</h2>
          }
        </div>
        <div className="input-response">
          {this.state.result === 'success' ?
          <h3>Your request for {this.state.email} has been sent.</h3> :
          <h3>Please try again later or email <a key="email" href={'mailto:team@linklater.app'}>team@linklater.app</a>.</h3>
          }
        </div>

        </div>
      )}
    </div>
    </Plx>

    </div>
    </Plx>
    </section>

  );
}
};

export default RequestAccess;
