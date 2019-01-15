import React from 'react';

class ProjectsPage extends React.Component {

  render() {
    return (
      <div id="pageContent" className="animated fadeInLeft">
        <h1>Projects</h1>

        <div className="groupedText">
          <p>
            <b>This site:</b></p>
            This site is a single-page, responsive app using React/Redux and some CSS for routing and animations.
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://github.com/rodellison/react-resume" title="Online site">View on Github</a>
            </div></div>

        </div>

        <div className="groupedText">
          <p>
            <b>Unity3D Projects:</b></p>
            My creations using Unity - various AR/VR applications, Unity driven Cinematics, and Game Applications including Motion Capture
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://connect.unity.com/u/583ecb8332b3060028471c2f/column" title="Unity3D app">View on Unity Connect</a>
            </div></div>

        </div>

        <div className="groupedText">
          <p>
            <b>&quot;The Music Man&quot; - Amazon Echo/Alexa skill:</b></p>
            AWSMusicMan - is a Java application allowing Amazon Echo customers the ability to query musician and venue calendars -
            for which the results are &#39;spoken&#39; through the customer&#39;s ECHO device (via Alexa). Recent updates include support for APL (Alexa Presentation Language) to allow
            the skill to provide device specific (Echo Show, Spot, HD TVs, etc.) visual information.
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://github.com/rodellison/AWSMusicMan2" title="The Music Man">View on Github</a>
            </div></div>

        </div>

      </div>
    );
  }
}

export default ProjectsPage;
