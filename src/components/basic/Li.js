'use strict';

import React from 'react';

export class LI extends React.Component {
  render() {
    return <li>{ this.props.children }</li>;
  }
}

export default LI;
