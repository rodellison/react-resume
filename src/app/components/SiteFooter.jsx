import React from 'react';

class SiteFooter extends React.Component {

  render() {
    return (
      <footer>
        <hr/>
        <p>Website, photos, & content &copy; Rod Ellison 2016</p>
        <p><a href="mailto:rod.r.ellison@gmail.com">Rod.R.Ellison@gmail.com</a></p>
        <p>
          <a href="https://bitbucket.com/rodellison" title="Bitbucket"><i className="fa fa-bitbucket fa-lg"/></a>
          <a href="https://github.com/rodellison" title="Bitbucket"><i className="fa fa-github fa-lg"/></a>
          <a href="http://www.linkedin.com/in/rodellison" title="LinkedIn"><i className="fa fa-linkedin-square fa-lg"/></a>
        </p>
      </footer>
    );
  }
}

export default SiteFooter;
