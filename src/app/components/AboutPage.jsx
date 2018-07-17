import React from 'react';

class AboutPage extends React.Component {

  render() {
    return (
      <div id="pageContent" className="animated fadeInLeft">
        <h1>About</h1>
        <div className="boxOfText">
          <p>I&#39;m an IT professional with over 24 years of diverse experience that includes application development, enterprise architecture, strategic planning and portfolio governance, business process design, investment optimization, and third party vendor technical relationship oversight.</p>
          <p>I have an <b>innovation mindset</b> and love to explore and prototype new technologies for business and customer benefit. </p>
        </div>

        <div className="groupedText">
          <p><b>Technical Skills</b>
            I view my key strengths as the following: <br/>
            <div className="groupedText">
              <ul className="skillList">
                <li>
                    Innovation leader
                  </li>
                <li>
                    Technical mentor
                  </li>
                <li>
                    Effective communicator
                  </li>
                <li>
                    Strategic planning and portfolio governance
                  </li>
                <li>
                    Investment optimization
                  </li>
                <li>
                    Business process improvement
                  </li>
                <li>
                    Enterprise Content Management platforms
                  </li>
                <li>
                    Software development (C#, Java, AWS, Unity3D)
                  </li>
              </ul>
            </div>
              Specific experience and development highlights can be found on my &#39;Experience&#39; and &#39;Projects&#39; pages.
          </p>
        </div>

        <div className="groupedText">
          <p><b>Personal</b>
            I&#39;m (almost) a Florida native, having moved from the midwest just after High school and completing my BS Computer Science at Florida Atlantic University.
            I love the Ocean and am an avid Kayaker, as well as Scuba Diver - helping lead a local dive club called <a href="http://www.kayuba.org"><b>Kayuba</b></a>.
            My other interests include 3D modeling/rendering, motorcycling (Harley Deuce), playing guitar, and traveling.
          </p>
        </div>

        <div className="groupedText">
          <p><b>Currently</b>
            I&#39;m very engaged in both Virtual Reality, as well as Voice computing. Using Oculus Rift/Unity3D, I created the first VR demos for American Express to demonstrate use cases in eLearning as well as virtual Architecture (building) walkthroughs.
              I&#39;m proud to be one of the first (1000) Amazon &quot;Alexa&quot; skill developers, having developed <b>&quot;The Music Man&quot;</b> for Amazon Echo customers. &quot;The Music Man&quot; is written in Java, hosted in AWS/Lambda, and leverages a third party &quot;Songkick&quot; API to allow users to query where their favorite musical
              artists are playing next, or the calendar of events coming to a local venue.
          </p>
        </div>

      </div>
    );
  }
}

export default AboutPage;
