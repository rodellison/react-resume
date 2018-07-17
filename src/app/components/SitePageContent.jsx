import React from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../components/AboutPage.jsx';
import ProjectsPage from './ProjectsPage.jsx';
import ExperiencePage from './ExperiencePage.jsx';
import ContactPage from './ContactPage.jsx';

class SitePageContent extends React.Component {

  render() {
    switch (this.props.todos) {
      case 'about':
        return (
          <div>
            <AboutPage/>
          </div>
        );
      case 'projects':
        return (
          <div>
            <ProjectsPage/>
          </div>
        );
      case 'experience':
        return (
          <div>
            <ExperiencePage/>
          </div>
        );
      case 'contact':
        return (
          <div>
            <ContactPage/>
          </div>
        );
      default:
        return (
          <div>
            <AboutPage/>
          </div>
        );
    }
  }
  }

SitePageContent.propTypes = {
  todos: PropTypes.string
};

export default SitePageContent;
