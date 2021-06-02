import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Plx from "react-plx"
import { FaLink } from "react-icons/fa";
import addToMailchimp from 'gatsby-plugin-mailchimp'


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


class RequestAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      textInputChangeEmail: false,
      textInputChangeName: false
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
    // await addToMailchimp(this.state.email, this.state.name)
  }

  render() {
    return (
    <section id="request" >
    <Plx parallaxData={parallaxData}>

    <div className="request-container">
    <Seo title="Request" />

    <Plx parallaxData={parallaxText} className="request-container-text">
    <form onSubmit={console.log('submit')}>
      <div className="request-container-input">
      <div className="center-text">
      <FaLink className="link-icon-request"/>

      <p>Sign up below to request<br></br>early access to <span className='white-text'><b>LinkLater</b></span> for iOS</p>

      </div>

        <input
          placeholder="Name"
          name="name"
          type="text"
          width="50vw"
          onChange={text => this.textInputChangeName(text)}
        />
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={text => this.textInputChangeEmail(text)}

        />
        <button type="submit" onClick={() => this.handleSubmit} className="request-button-submit">
        <b>Request early access</b>
      </button>
      </div>
    </form>
    </Plx>

    </div>
    </Plx>
    </section>

  );
}
};

export default RequestAccess;
