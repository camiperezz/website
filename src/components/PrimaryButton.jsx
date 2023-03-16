// primary button
import React from 'react';
import PropTypes from 'prop-types';

class PrimaryButton extends React.Component {
  render() {
    return (
      <button className="primary-button" >
        <a href="https://camiperezz.github.io/website/#/about">{this.props.text}</a>
      </button>
    );
  }
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default PrimaryButton;
