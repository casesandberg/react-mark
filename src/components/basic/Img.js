'use strict';

import React from 'react';

export class IMG extends React.Component {
  render() {
    return <img src={ this.props.href } alt={ this.props.alt } />;
  }
}

export default IMG;
