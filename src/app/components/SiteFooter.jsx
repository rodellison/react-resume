import React from 'react';

class SiteFooter extends React.Component {

  render() {
    return (
      <footer>
        <hr/>
        <p>Website, photos, & content &copy; Rod Ellison 2019</p>
        <p><a href="mailto:rod.r.ellison@gmail.com">Rod.R.Ellison@gmail.com</a></p>
        <p>
            <a href="http://www.linkedin.com/in/rodellison" title="LinkedIn"><i className="fa fa-linkedin-square fa-lg"/></a>
            <a href="https://github.com/rodellison" title="Github"><i className="fa fa-github fa-lg"/></a>
            <a href="https://www.instagram.com/rod.ellison/" title="Instagram"><i className="fa fa-instagram fa-lg"/></a>
        </p>
      </footer>
    );
  }
}

export default SiteFooter;
