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
      <Seo title="🔗 About" />
        <div className="info-container-items">
          <div className="info-container-pic">



            <img width={300} src={demo} />

            {/*<StaticImage
            src="../../images/screenshotTemp.png"
            width={300}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
            />*/}

            {/*<img width={300} src={demo} />*/}


          </div>

          <div className="info-container-text">
            <h2>LinkLater is a <span className="blue">social</span> bookmarking app.</h2>
            <br/>
            <div className="bullets">

              <div className="bullet-box">
                <MdAddCircleOutline className="bullet-icon"/>
                <div className="bullet-info">
                  <p><span className="blue-bold">Save links for later.</span><br/>
                  Add links to your feed so you can get to them on your own time.</p>
                </div>
              </div>
              <br/>

              <div className="bullet-box">
                <FiSend className="bullet-icon"/>
                <div className="bullet-info">
                  <p><span className="blue-bold">Share with friends.</span><br/>
                  Sync your contacts and share links with friends.</p>
                </div>
              </div>
              <br/>


              <div className="bullet-box">
                <RiBookmarkLine className="bullet-icon"/>
                <div className="bullet-info">
                  <p><span className="blue-bold">Create collections.</span><br/>
                  Personal and shared collections help you organize your links.</p>
                </div>
              </div>
              <br/>


              <div className="bullet-box">
                <FaList className="bullet-icon"/>
                <div className="bullet-info">
                  <p>
                  <span className="blue-bold">One simple feed.</span><br/>
                  No more digging through cluttered inboxes or threads.</p>
                </div>
              </div>
              <br/>

            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Info
