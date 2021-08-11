import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import demo from "../../images/Screenshot01.png"
import { RiPlayListAddFill, RiAddCircleLine, RiBookmarkLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import Seo from "../../components/seo"





class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-container">
      <Seo title="Save links for later" />
        {/*<div className="info-container-items">
          <div className="info-container-pic">



            <img width={300} src={demo} />




          </div>*/}

          <div className="info-container-text">
            <h2>LinkLater is a <span className="blue">social</span> bookmarking app.</h2>
            <br/>
            <div className="bullets">

              <div className="bullet-box">

                  <p className="bullet-text">
                  Every day, we make discoveries online that are worth sharing. But most of our digital discoveries will go unseen by anyone else – buried in algorithmic feeds, lost in inboxes and group chats or simply not shared at all.
                  </p>

              </div>
              <br/>

              <div className="bullet-box">

                  <p className="bullet-text">
                  We see links as a mechanism for capturing and communicating our digital discoveries. We’re building LinkLater because we believe there should be a better way to share and curate collections of links with friends.
                  </p>

              </div>
              <br/>


              <div className="bullet-box">

              <p className="bullet-text">
              We’re currently in closed beta but if you’d like to request an invite, please sign up below. If you’re interested in joining our team or getting in touch, please email us at <a key="email" href={'mailto:team@linklater.app'}>team@linklater.app</a>.
              </p>

          </div>
              <br/>




            </div>
          </div>
        {/*</div>*/}
      </div>


    )
  }
}

export default Info
