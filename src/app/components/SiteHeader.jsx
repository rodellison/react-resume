import React from 'react';
import bgImage from "../../images/OceanBackground.jpg";
import faceImage from "../../images/rodface.jpg"

class SiteHeader extends React.Component {

  render() {
    return (
      <div>
        <img className="banner" src={bgImage} alt="Background"/>
        <img className="face" src={faceImage} alt="Rod Ellison"/>
      </div>
    );
  }
}

export default SiteHeader;
