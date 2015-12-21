'use strict';

import React from 'react';

export class DEL extends React.Component {
  render() {
    return <del>{ this.props.children }</del>;
  }
}

export default DEL;
