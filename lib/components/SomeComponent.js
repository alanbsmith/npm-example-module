import React, { Component, PropTypes } from 'react';

import '../../css/base.css';

class SomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="some-component__title">Hello, {this.props.name}!</h1>
      </div>
    );
  };
}

SomeComponent.propTypes = {
  name: PropTypes.string
}

export default SomeComponent;
