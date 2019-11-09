import React from 'react';

class ContactPage extends React.Component {

  render() {
    return (
      <div id="pageContent" className="animated fadeInLeft">
        <h1>Contact</h1>
        <div className="contactBlock">
          Feel free to download my resume at the link above!<br/><br/>
          And contact me at <a href="mailto:Rod.R.Ellison@gmail.com">Rod.R.Ellison@gmail.com</a><br/><br/>
            <a href="http://www.linkedin.com/in/rodellison" title="LinkedIn"><i className="fa fa-linkedin-square fa-3x"/></a>
            <a href="https://github.com/rodellison" title="Github"><i className="fa fa-github fa-3x"/></a>
            <a href="https://www.instagram.com/rod.ellison/" title="Instagram"><i className="fa fa-instagram fa-3x"/></a>
        </div>
      </div>
    );
  }
}

export default ContactPage;
