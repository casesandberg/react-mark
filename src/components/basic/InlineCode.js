'use strict';

import React from 'react';

export class INLINECODE extends React.Component {
  render() {
    return <code>{ this.props.children }</code>;
  }
}

export default INLINECODE;
