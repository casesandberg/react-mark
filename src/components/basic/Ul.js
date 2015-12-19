'use strict';

import React from 'react';

export class UL extends React.Component {
  render() {
    return <ul>{ this.props.children }</ul>;
  }
}

export default UL;
