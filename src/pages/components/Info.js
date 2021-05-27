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
            <h2>LinkLater is a social bookmarking app.</h2>
            <h3>As the internet continues to become more saturated and fragmented, discovery will be a growing problem for creators and consumers alike.</h3>
            <h2></h2>

        </div>

        </div>

      </div>


    )
  }
}

export default Info
