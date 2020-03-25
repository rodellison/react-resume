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
                  <b>&quot;The Music Man&quot; - Amazon Echo/Alexa skill:</b></p>
              AWSMusicMan - is a Java application allowing Amazon Echo customers the ability to query musician and venue calendars -
              for which the results are &#39;spoken&#39; through the customer&#39;s ECHO device (via Alexa). Recent updates include support for APL (Alexa Presentation Language) to allow
              the skill to provide device specific (Echo Show, Spot, HD TVs, etc.) visual information.
              <div className="buttonHolder"><div className="gitHubButton">
                  <a href="https://github.com/rodellison/AWSMusicMan2" title="The Music Man">View on Github</a>
              </div></div>

          </div>

          <div className="groupedText">
              <p>
                  <b>&quot;The Conch Republic&quot; - Amazon Echo/Alexa skill:</b></p>
              The Conch Republic is a Java application allowing Amazon Echo customers the ability to verbally
              query the Official
              Florida Keys Tourism Calendar of Events to find out happenings in the popular cities of the Florida
              Keys (Key Largo, Islamorada, Marathon, and Key West).
              A backend Java (Vert.x) service and API was setup to work with AWS Dynamo DB for fetching and storing event
              details. Key AWS components used include DynamoDB, Lambda, SNS, API Gateway
              and Translate. Translate is called for users invoking their Alexa to handle real-time English to
              Spanish translation. APL (Alexa Presentation Language) allows
              the skill to provide device specific (Echo Show, Spot, HD TVs, etc.) visual information.
              <div className="buttonHolder">
                  <div className="gitHubButton">
                      <a href="https://github.com/rodellison/conch-republic" title="The Conch Republic">View on
                          Github</a>
                  </div>
              </div>

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
                  <b>Unity3D research and template projects:</b></p>
              Personal Unity projects that focus on key topics<br/><br/>
              <ul>
                  <li><a href="https://github.com/rodellison/UnityEvents" title="Unity Events">Unity Events</a> - a project using scriptable objects to implement events with listeners</li>
                  <li><a href="https://github.com/rodellison/SpeechTest" title="SpeechTest">Speech Recognition</a> - a project demonstrating the use of MS speech libraries to detect voice commands, perform real-time dictation, as a means to control game/app logic</li>
                  <li><a href="https://github.com/rodellison/ARFoundation-TemplateProject" title="ARFoundation Template">ARFoundation Template</a> - a template project that can serve as a baseline project for others, incorporating scale and rotate functionality, using ARCore/ARKit for AR object presentation.</li>
                  <li><a href="https://github.com/rodellison/SnowScene-ASE" title="SnowScene ASE">SnowScene ASE</a> - a custom Snow shader Unity project using Amplify Shader Editor. </li>
                  <li><a href="https://github.com/rodellison/LWRP-ASE-Flag" title="LWRP-ASE-Flag">LWRP-ASE-Flag</a> - a Unity Lightweight render pipeline project, incorporating Amplify Shader Editor for a custom waving flag shader</li>
              </ul>
           </div>

      </div>
    );
  }
}

export default ProjectsPage;
