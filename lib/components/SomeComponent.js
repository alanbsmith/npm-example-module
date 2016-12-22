import React, { Component, PropTypes } from 'react';

import '../../css/base.css';

class SomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="zesty-animate">
        {this.props.children}
      </div>
    );
  };
}

export default SomeComponent;
