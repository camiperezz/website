// primary button
import React from 'react';
import PropTypes from 'prop-types';

class PrimaryButton extends React.Component {
  render() {
    return (
      <button className="button-primary" >
        <a href={this.props.link}>{this.props.text}</a>
      </button>
    );
  }
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default PrimaryButton;
