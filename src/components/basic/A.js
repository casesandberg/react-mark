'use strict';

import React from 'react';

export class A extends React.Component {
  render() {
    return <a href={ this.props.href } title={ this.props.title }>{ this.props.children }</a>;
  }
}

export default A;
