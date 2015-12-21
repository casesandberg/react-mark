'use strict';

import React from 'react';

export class REF extends React.Component {
  render() {
    return <a href={ '#' + this.props.target }>{ this.props.children }</a>;
  }
}

export default REF;
