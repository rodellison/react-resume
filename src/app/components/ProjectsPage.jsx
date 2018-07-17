import React from 'react';

class ProjectsPage extends React.Component {

  render() {
    return (
      <div id="pageContent" className="animated fadeInLeft">
        <h1>Projects</h1>

        <div className="groupedText">
          <p>
            <b>This site:</b>
            This site is a single-page, responsive app using React/Redux and some CSS for routing and animations.
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://github.com/rodellison/" title="Online site">View on Github</a>
            </div></div>
          </p>
        </div>

        <div className="groupedText">
          <p>
            <b>Unity3D Projects:</b>
            My creations using Unity - various AR/VR applications, Unity driven Cinematics, and Game Applications
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://connect.unity.com/u/583ecb8332b3060028471c2f/column" title="Unity3D app">View on Unity Connect</a>
            </div></div>
          </p>
        </div>

        <div className="groupedText">
          <p>
            <b>&quot;The Music Man&quot; - Amazon Echo/Alexa skill:</b>
            AWSMusicMan - is a Java application, which includes a JavaFX test app - allowing Amazon Echo customers the ability to query musician and venue calendars - for which the results are &#39;spoken&#39; through the customer&#39;s ECHO device (via Alexa).
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://bitbucket.org/rodellison/awsmusicman" title="The Music Man">View on Bitbucket</a>
            </div></div>
          </p>
        </div>

        <div className="groupedText">
          <p>
            <b>&quot;AWSS3GUI&quot; - Amazon Web Services S3 Storage app:</b>
            AWSS3GUI - is a JavaFX application that leverages the AWS S3 SDKs for interaction with S3. While there are numerous OTS tools available now, this app is something of a very direct S3 uploader, downloader and file permission setter for items in a specific S3 bucket.
            It was created to get familiar with S3 SDKs and features.
            <div className="buttonHolder"><div className="gitHubButton">
              <a href="https://bitbucket.org/rodellison/awss3gui" title="AWS S3 Gui">View on Bitbucket</a>
            </div></div>
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
