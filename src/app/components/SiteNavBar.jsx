import React from 'react';
import PropTypes from 'prop-types';
import navBarImage from "../../images/menu.svg";
import resumeDoc from "../../files/Rodney Ellison 2020.doc";

class SiteNavBar extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('resize', SiteNavBar.updateDimensions.bind(this));
    SiteNavBar.handleClick = SiteNavBar.handleClick.bind(this);
  }

  static updateDimensions() {
    if (window.innerWidth > 824) {
      const linksEl = document.querySelector('#menu');
      if (linksEl.style.display === 'none') {
        linksEl.style.display = 'inline';
      }
    }
    if (window.innerWidth <= 824) {
      const linksEl = document.querySelector('#menu');
      if (linksEl.style.display === 'inline') {
        linksEl.style.display = 'none';
      }
    }
  }

  static handleClick() {
    console.log('Burger clicked');
    const linksEl = document.querySelector('#menu');
    console.log(linksEl.style.display);
    if (linksEl.style.display === 'inline') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'inline';
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <nav id="newnavbar">
          <p>Rod Ellison</p>
          <label id="show-menu"><img src={navBarImage} alt="show-menu" onClick={SiteNavBar.handleClick}/></label>
          <ul id="menu" >
            {this.props.pages.map(listValue => {
              return (<ListItem key={listValue.id} listItemValue={listValue} fnToCall={this.props.changePage}/>);
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.props.listItemValue.name === 'resume') {
      return (
        <li>
          <a href={resumeDoc} download>resume</a>
        </li>
      );
    }
    return (
      <li onClick={this.handleClick}><a href="/#">{this.props.listItemValue.name}</a></li>);
  }

  handleClick() {
    console.log('handleChange setState: ');
    console.log(window.innerWidth);
      if (window.innerWidth < 825) {
          SiteNavBar.handleClick();
      }
    this.props.fnToCall(this.props.listItemValue.name);
  }
}

ListItem.propTypes = {
  listItemValue: PropTypes.object,
  fnToCall: PropTypes.func
};

SiteNavBar.propTypes = {
  changePage: PropTypes.func.isRequired,
  pages: PropTypes.array
};

export default SiteNavBar;
