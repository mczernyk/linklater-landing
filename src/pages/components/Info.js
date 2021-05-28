import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import demo from "../../images/screenshotTemp.png"

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-container">
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
            <h2><span className="black-bold">LinkLater</span> is a <span className="blue-bold">social</span> bookmarking app.</h2>
            <div>
            <h3>As the internet continues to get more saturated and fragmented, discovery and curation will become bigger problems for creators and consumers alike.</h3>
            <h3><span className="blue-bold">LinkLater</span> helps you keep track of content that matters.</h3>
            <h3>Your <span className="black-bold">Feed</span> is a composite of links that you've saved for later and content sent to you by friends that you can get to on your own time.</h3>
            <h3>You can organize links from your <span className="black-bold">Feed</span> into <span className="black-bold">Collections</span> or share them with your friends on <span className="blue-bold">LinkLater</span>.</h3>
            </div>

            <h2></h2>

        </div>

        </div>

      </div>


    )
  }
}

export default Info
