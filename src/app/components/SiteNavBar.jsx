import React from 'react';
import PropTypes from 'prop-types';
import navBarImage from "../../images/menu.svg";
import resumeDoc from "../../files/Rodney R Ellison.pdf";

class SiteNavBar extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.handleClick = this.handleClick.bind(this);
  }

  updateDimensions() {
    if (window.innerWidth > 767) {
      const linksEl = document.querySelector('#menu');
      if (linksEl.style.display === 'none') {
        linksEl.style.display = 'inline';
      }
    }
    if (window.innerWidth <= 767) {
      const linksEl = document.querySelector('#menu');
      if (linksEl.style.display === 'inline') {
        linksEl.style.display = 'none';
      }
    }
  }

  handleClick() {
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
          <label id="show-menu"><img src={navBarImage} alt="show-menu" onClick={this.handleClick}/></label>
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
      <li onClick={this.handleClick}><a>{this.props.listItemValue.name}</a></li>);
  }

  handleClick() {
    console.log('handleChange setState: ');
    this.props.fnToCall(this.props.listItemValue.name);
  }
}

ListItem.propTypes = {
  listItemValue: PropTypes.array,
  fnToCall: PropTypes.func
};

SiteNavBar.propTypes = {
  changePage: PropTypes.func.isRequired,
  pages: PropTypes.array
};

export default SiteNavBar;
