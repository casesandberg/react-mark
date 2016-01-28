'use strict';

import React from 'react';

export class OL extends React.Component {
  render() {
    return <ol>{ this.props.children }</ol>;
  }
}

export default OL;
