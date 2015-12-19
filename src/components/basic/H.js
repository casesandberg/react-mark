'use strict';

import React from 'react';

export class H extends React.Component {
  render() {
    return React.createElement('h' + this.props.level, {}, this.props.children);
  }
}

export default H;
