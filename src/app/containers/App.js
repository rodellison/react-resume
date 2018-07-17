import React, {Component} from 'react';
import SiteNavBar from '../components/SiteNavBar.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SitePageContent from '../components/SitePageContent.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as TodoActions from '../actions/index';
import {bindActionCreators} from 'redux';

class App extends Component {

  render() {
    console.log('SiteApp: ' + this.props.todos.thePageToPresent);
    return (
      <div id="content">
        <SiteNavBar
          changePage={this.props.actions.changePage} pages={this.props.todos.pageList}
                                                     />
        <SiteHeader/>
        <SitePageContent todos={this.props.todos.thePageToPresent}/>
        <SiteFooter/>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
