import React from 'react';

class AboutPage extends React.Component {

  render() {
    return (
      <div id="pageContent" className="animated fadeInLeft">
        <h1>About</h1>
        <div className="boxOfText">
          <p>I&#39;m an IT professional and Digital Innovator with years of diverse corporate experience in application development, enterprise architecture, and strategic planning and portfolio governance.
              I have a passion in the development of visually exciting applications that bridge technologies such as Mixed reality, and Voice with back-end Cloud API/Database solutions.</p>
          <p>With a strong <b>innovation and growth mindset</b>, I lead by demonstration - researching cutting edge technologies and establishing proof of concepts that provide business value. </p>
        </div>

        <div className="groupedText">
          <p><b>Technical Skills: </b></p> <br/>
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
                    Software development (C#, Java, Go, AWS, Unity3D)
                  </li>
              </ul>
            </div>
              Specific experience and development highlights can be found on my &#39;Experience&#39; and &#39;Projects&#39; pages.

        </div>

        <div className="groupedText">
          <p><b>Personal:</b>
            I&#39;m (almost) a Florida native, having moved from the midwest just after High school and completed my BS Computer Science at Florida Atlantic University.
            I love the Ocean and am an avid Kayaker, as well as Scuba Diver - helping lead a local dive club called <a href="http://www.kayuba.org"><b>Kayuba</b></a>.
            <br/>My interests include 3D modeling/rendering, Augmented, Virtual and Mixed reality development, Voice app development,
              Game programming, motorcycling, playing guitar, and traveling.
              <br/>I&#39;m proud to be one of the first (1000) Amazon &quot;Alexa&quot; skill developers, having developed <b>&quot;The Music Man&quot;</b>,
              which leverages a third party &quot;Songkick&quot; API to allow global users to query where their favorite musical
              artists are playing next, or the calendar of events coming to a local venue. Using Oculus Rift/Unity3D, I created the very first VR demos for American Express to demonstrate use cases in eLearning as well as
              virtual Architecture (building) walkthroughs.
          </p>
        </div>

        <div className="groupedText">
          <p><b>Currently:</b>
            I&#39;m engaged in the development of end user Virtual/Augmented Reality/Gaming applications using Unity/C#, as well as continued development in AWS (Alexa and Serverless) applications using Golang.
              I've recently obtained Unity Certified Programmer status, and am currently working on AWS Certified Developer.
          </p>
        </div>

      </div>
    );
  }
}

export default AboutPage;
