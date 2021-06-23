import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Plx from "react-plx"
import { FaLink } from "react-icons/fa";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import smoothscroll from "smoothscroll-polyfill"



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

  textInputChangeEmail(input) {
    input.length > 0
      ? this.setState({
          checkTextInputChangeEmail: true,
          email: input
        })
      : this.setState({
          checkTextInputChangeEmail: false
        })
  }

  textInputChangeName(input) {
    input.length > 0
      ?
        this.setState({
          checkTextInputChangeName: true,
          name: input
        })
      : this.setState({
          checkTextInputChangeName: false
        })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email, {NAME: this.state.name})
    await this.setState({
      result: result
    })
    console.log('result', this.state.result)
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
    <Seo title="Request" />

    <Plx parallaxData={parallaxText}>
    <div className="request-container-text">
      <form onSubmit={console.log('submit')}>
        <div className="request-container-input">

          <div className="center-text">

            <FaLink className="link-icon-request" onClick={this.handleClickScroll}   cursor="pointer"
            />

            <p>Sign up below to request<br></br>early access to <span className='white-text'>LinkLater</span> for iOS</p>

          </div>

          <div className="input-box">
            <input
              placeholder="Name"
              name="name"
              type="text"
              autoFocus="autofocus"
              onChange={text => this.textInputChangeName(text)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Email address"
              name="email"
              type="text"
              autoFocus="autofocus"
              onChange={text => this.textInputChangeEmail(text)}

            />
          </div>
          <button type="submit" onClick={() => this.handleSubmit} className="request-button-submit">
          <b>Request early access</b>
        </button>
        </div>
      </form>
    </div>
    </Plx>

    </div>
    </Plx>
    </section>

  );
}
};

export default RequestAccess;
