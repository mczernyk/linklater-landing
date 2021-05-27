import React, { useState } from 'react';
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


class RequestAccess extends React.Component {
  constructor(props) {
    super(props);
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
      <p>Sign up below to request early access to LinkLater for iOS</p>

        <input
          placeholder="Name"
          name="name"
          type="text"
          onChange={console.log('change')}
        />
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={console.log('change')}
        />
        <button type="submit" onClick={console.log('submit')} className="request-button-submit">
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
