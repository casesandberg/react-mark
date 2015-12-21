'use strict';

import React from 'react';

export class EM extends React.Component {
  render() {
    return <em>{ this.props.children }</em>;
  }
}

export default EM;
