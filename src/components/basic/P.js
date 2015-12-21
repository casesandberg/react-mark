'use strict';

import React from 'react';

export class P extends React.Component {
  render() {
    return <p>{ this.props.children }</p>;
  }
}

export default P;
